-- Clean Migration Script - Drops everything and recreates
-- WARNING: This will DELETE ALL DATA in bookings and contact_submissions tables!
-- Only use this if you're starting fresh or have backed up your data

-- ============================================
-- DROP EXISTING OBJECTS
-- ============================================

-- Drop triggers
DROP TRIGGER IF EXISTS update_bookings_updated_at ON bookings;
DROP TRIGGER IF EXISTS update_contact_submissions_updated_at ON contact_submissions;

-- Drop function
DROP FUNCTION IF EXISTS update_updated_at_column();

-- Drop policies
DROP POLICY IF EXISTS "Allow public insert on bookings" ON bookings;
DROP POLICY IF EXISTS "Allow authenticated read on bookings" ON bookings;
DROP POLICY IF EXISTS "Allow authenticated update on bookings" ON bookings;
DROP POLICY IF EXISTS "Allow public insert on contact_submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Allow authenticated read on contact_submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Allow authenticated update on contact_submissions" ON contact_submissions;

-- Drop tables (WARNING: This deletes all data!)
-- Uncomment the next two lines ONLY if you want to start completely fresh
-- DROP TABLE IF EXISTS bookings CASCADE;
-- DROP TABLE IF EXISTS contact_submissions CASCADE;

-- ============================================
-- CREATE TABLES
-- ============================================

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
-- CREATE INDEXES
-- ============================================

CREATE INDEX IF NOT EXISTS idx_bookings_date ON bookings(date);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at);

-- ============================================
-- CREATE FUNCTION
-- ============================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc', NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- ============================================
-- CREATE TRIGGERS
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
-- ENABLE RLS
-- ============================================

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- ============================================
-- CREATE POLICIES
-- ============================================

-- Bookings policies
CREATE POLICY "Allow public insert on bookings"
    ON bookings FOR INSERT
    TO anon, authenticated, service_role
    WITH CHECK (true);

CREATE POLICY "Allow authenticated read on bookings"
    ON bookings FOR SELECT
    TO authenticated
    USING (true);

CREATE POLICY "Allow authenticated update on bookings"
    ON bookings FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- Contact submissions policies
CREATE POLICY "Allow public insert on contact_submissions"
    ON contact_submissions FOR INSERT
    TO anon, authenticated, service_role
    WITH CHECK (true);

CREATE POLICY "Allow authenticated read on contact_submissions"
    ON contact_submissions FOR SELECT
    TO authenticated
    USING (true);

CREATE POLICY "Allow authenticated update on contact_submissions"
    ON contact_submissions FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);

