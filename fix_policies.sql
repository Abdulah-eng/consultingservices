-- Quick Fix: Update RLS Policies to Allow Service Role
-- Run this in Supabase SQL Editor if you're still getting RLS errors

-- Fix bookings insert policy
DROP POLICY IF EXISTS "Allow public insert on bookings" ON bookings;
CREATE POLICY "Allow public insert on bookings"
    ON bookings FOR INSERT
    TO anon, authenticated, service_role
    WITH CHECK (true);

-- Fix contact_submissions insert policy
DROP POLICY IF EXISTS "Allow public insert on contact_submissions" ON contact_submissions;
CREATE POLICY "Allow public insert on contact_submissions"
    ON contact_submissions FOR INSERT
    TO anon, authenticated, service_role
    WITH CHECK (true);

-- Verify policies were created
SELECT 
    schemaname,
    tablename,
    policyname,
    roles,
    cmd
FROM pg_policies 
WHERE tablename IN ('bookings', 'contact_submissions')
ORDER BY tablename, policyname;

