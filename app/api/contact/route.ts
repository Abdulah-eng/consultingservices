import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { sendContactNotification } from '@/lib/email'

// Create Supabase client for server-side API routes
// Uses service role key if available (bypasses RLS), otherwise uses anon key with proper role
function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl) {
    throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL environment variable')
  }

  // Prefer service role key (bypasses RLS) for server-side operations
  if (serviceRoleKey) {
    return createClient(supabaseUrl, serviceRoleKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    })
  }

  // Fallback to anon key - must be set for RLS policies to work
  if (!anonKey) {
    throw new Error(
      'Missing Supabase keys. Please set either SUPABASE_SERVICE_ROLE_KEY or NEXT_PUBLIC_SUPABASE_ANON_KEY in your .env.local file.'
    )
  }

  // When using anon key, we need to ensure it's used as anonymous role
  // The anon key should work with RLS policies if they're set correctly
  return createClient(supabaseUrl, anonKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    },
    global: {
      headers: {
        'apikey': anonKey,
      }
    }
  })
}

export async function POST(request: NextRequest) {
  try {
    const supabase = getSupabaseClient()
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Insert the contact form submission
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name,
          email,
          phone,
          message,
          status: 'new',
        },
      ])
      .select()
      .single()

    if (error) {
      console.error('Error creating contact submission:', error)
      return NextResponse.json(
        {
          error: 'Failed to submit contact form',
          details: error.message || 'Unknown error',
          code: error.code || 'UNKNOWN'
        },
        { status: 500 }
      )
    }

    // Send email notification to admin (don't fail the request if email fails)
    try {
      const adminEmail = process.env.ADMIN_EMAIL
      if (adminEmail) {
        await sendContactNotification({
          name,
          email,
          phone,
          message,
          adminEmail,
        })
        console.log('Admin notification email sent successfully')
      } else {
        console.warn('ADMIN_EMAIL environment variable not set - skipping email notification')
      }
    } catch (emailError) {
      console.error('Failed to send admin notification email:', emailError)
      // Don't return error - contact form was successfully submitted to database
    }

    return NextResponse.json(
      { message: 'Contact form submitted successfully', data },
      { status: 201 }
    )
  } catch (error: any) {
    console.error('Error in contact API:', error)
    
    // Check if it's a missing environment variable error
    if (error.message?.includes('Missing Supabase')) {
      return NextResponse.json(
        { 
          error: 'Server configuration error',
          details: 'Supabase environment variables are not configured. Please check your .env.local file.'
        },
        { status: 500 }
      )
    }
    
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error.message || 'Unknown error occurred'
      },
      { status: 500 }
    )
  }
}

