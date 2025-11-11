-- Migration Script for Consulting Website Database
-- This script safely handles existing database objects
-- Run this in your Supabase SQL Editor

-- ============================================
-- 1. CREATE TABLES (IF NOT EXISTS)
-- ============================================

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  date DATE NOT NULL,
  time TIME NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  problem TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL,
  UNIQUE(date, time)
);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied', 'archived')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL
);

-- ============================================
-- 2. CREATE INDEXES (IF NOT EXISTS)
-- ============================================

CREATE INDEX IF NOT EXISTS idx_bookings_date ON bookings(date);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at);

-- ============================================
-- 3. CREATE OR REPLACE FUNCTION
-- ============================================

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc', NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- ============================================
-- 4. DROP EXISTING TRIGGERS (IF THEY EXIST)
-- ============================================

DROP TRIGGER IF EXISTS update_bookings_updated_at ON bookings;
DROP TRIGGER IF EXISTS update_contact_submissions_updated_at ON contact_submissions;

-- ============================================
-- 5. CREATE TRIGGERS
-- ============================================

CREATE TRIGGER update_bookings_updated_at 
    BEFORE UPDATE ON bookings
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_contact_submissions_updated_at 
    BEFORE UPDATE ON contact_submissions
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- 6. ENABLE ROW LEVEL SECURITY
-- ============================================

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- ============================================
-- 7. DROP EXISTING POLICIES (IF THEY EXIST)
-- ============================================

-- Drop existing policies for bookings
DROP POLICY IF EXISTS "Allow public insert on bookings" ON bookings;
DROP POLICY IF EXISTS "Allow authenticated read on bookings" ON bookings;
DROP POLICY IF EXISTS "Allow authenticated update on bookings" ON bookings;

-- Drop existing policies for contact_submissions
DROP POLICY IF EXISTS "Allow public insert on contact_submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Allow authenticated read on contact_submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Allow authenticated update on contact_submissions" ON contact_submissions;

-- ============================================
-- 8. CREATE POLICIES FOR BOOKINGS
-- ============================================

-- Allow anyone to insert bookings (for public booking form)
-- Include service_role for server-side API routes
CREATE POLICY "Allow public insert on bookings"
    ON bookings FOR INSERT
    TO anon, authenticated, service_role
    WITH CHECK (true);

-- Allow authenticated users to read all bookings (for admin dashboard)
CREATE POLICY "Allow authenticated read on bookings"
    ON bookings FOR SELECT
    TO authenticated
    USING (true);

-- Allow authenticated users to update bookings (for admin dashboard)
CREATE POLICY "Allow authenticated update on bookings"
    ON bookings FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- ============================================
-- 9. CREATE POLICIES FOR CONTACT_SUBMISSIONS
-- ============================================

-- Allow anyone to insert contact submissions (for public contact form)
-- Include service_role for server-side API routes
CREATE POLICY "Allow public insert on contact_submissions"
    ON contact_submissions FOR INSERT
    TO anon, authenticated, service_role
    WITH CHECK (true);

-- Allow authenticated users to read all contact submissions (for admin dashboard)
CREATE POLICY "Allow authenticated read on contact_submissions"
    ON contact_submissions FOR SELECT
    TO authenticated
    USING (true);

-- Allow authenticated users to update contact submissions (for admin dashboard)
CREATE POLICY "Allow authenticated update on contact_submissions"
    ON contact_submissions FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- ============================================
-- MIGRATION COMPLETE
-- ============================================
-- 
-- Verify the migration:
-- SELECT * FROM bookings LIMIT 1;
-- SELECT * FROM contact_submissions LIMIT 1;
-- 
-- Check policies:
-- SELECT * FROM pg_policies WHERE tablename IN ('bookings', 'contact_submissions');
-- 
-- Check triggers:
-- SELECT trigger_name, event_object_table 
-- FROM information_schema.triggers 
-- WHERE event_object_table IN ('bookings', 'contact_submissions');

