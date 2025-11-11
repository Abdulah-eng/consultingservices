# Fixing Row Level Security (RLS) Policy Error

## Problem
You're seeing this error:
```
new row violates row-level security policy for table "bookings"
```

## Solution Options

### Option 1: Update Database Policies (Recommended First Step)

Run this SQL in your Supabase SQL Editor to fix the policies:

```sql
-- Drop and recreate the insert policy for bookings
DROP POLICY IF EXISTS "Allow public insert on bookings" ON bookings;

CREATE POLICY "Allow public insert on bookings"
    ON bookings FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- Drop and recreate the insert policy for contact_submissions
DROP POLICY IF EXISTS "Allow public insert on contact_submissions" ON contact_submissions;

CREATE POLICY "Allow public insert on contact_submissions"
    ON contact_submissions FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);
```

### Option 2: Use Service Role Key (More Secure for Server-Side)

1. Go to your Supabase Dashboard → Settings → API
2. Copy the `service_role` key (NOT the `anon` key)
3. Add it to your `.env.local` file:

```env
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

**Important:** The service role key bypasses RLS, so:
- ✅ Perfect for server-side API routes
- ❌ NEVER expose it in client-side code
- ❌ NEVER commit it to git (it's already in .gitignore)

### Option 3: Check Your Supabase Project Settings

1. Go to Authentication → Policies
2. Make sure RLS is enabled but policies allow anonymous inserts
3. Verify your anon key is correct in `.env.local`

## After Fixing

1. Restart your Next.js dev server:
   ```bash
   npm run dev
   ```

2. Test the booking form again

3. Check the browser console - errors should be resolved

