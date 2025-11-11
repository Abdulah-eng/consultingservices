# Quick Fix for RLS Policy Error

## The Problem
You're getting: `new row violates row-level security policy for table "bookings"`

This happens because:
1. The API route is using the anon key (service role key not set)
2. Server-side anon key usage doesn't automatically get "anon" role
3. RLS policies require "anon" or "authenticated" role

## Solution: Add Service Role Key (RECOMMENDED)

### Step 1: Get Your Service Role Key
1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Select your project
3. Go to **Settings** → **API**
4. Find the **service_role** key (NOT the anon key)
5. Copy it

### Step 2: Add to .env.local
Create or edit `.env.local` in your project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

### Step 3: Restart Dev Server
```bash
# Stop the server (Ctrl+C)
# Then restart
npm run dev
```

**Important:** The service role key bypasses RLS, so it's perfect for server-side API routes. Never expose it in client-side code!

---

## Alternative: Fix Database Policies

If you can't use service role key, run this in Supabase SQL Editor:

```sql
-- Drop and recreate the policy to ensure it works
DROP POLICY IF EXISTS "Allow public insert on bookings" ON bookings;

CREATE POLICY "Allow public insert on bookings"
    ON bookings FOR INSERT
    TO anon, authenticated, service_role
    WITH CHECK (true);

-- Same for contact_submissions
DROP POLICY IF EXISTS "Allow public insert on contact_submissions" ON contact_submissions;

CREATE POLICY "Allow public insert on contact_submissions"
    ON contact_submissions FOR INSERT
    TO anon, authenticated, service_role
    WITH CHECK (true);
```

---

## Verify It's Working

After adding the service role key and restarting:
1. Try submitting a booking form
2. Check the terminal - you should see "Booking created successfully"
3. Check your Supabase dashboard - the booking should appear in the bookings table

