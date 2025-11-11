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

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_bookings_date ON bookings(date);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc', NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers to automatically update updated_at
CREATE TRIGGER update_bookings_updated_at BEFORE UPDATE ON bookings
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_contact_submissions_updated_at BEFORE UPDATE ON contact_submissions
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies for bookings table
-- Allow anyone to insert bookings (for public booking form)
-- Drop existing policy if it exists
DROP POLICY IF EXISTS "Allow public insert on bookings" ON bookings;

CREATE POLICY "Allow public insert on bookings"
    ON bookings FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- Also allow service role (for server-side API routes if needed)
-- Note: Service role bypasses RLS, so this is optional
-- If you use service role key in API routes, you don't need this policy

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

-- Create policies for contact_submissions table
-- Allow anyone to insert contact submissions (for public contact form)
-- Drop existing policy if it exists
DROP POLICY IF EXISTS "Allow public insert on contact_submissions" ON contact_submissions;

CREATE POLICY "Allow public insert on contact_submissions"
    ON contact_submissions FOR INSERT
    TO anon, authenticated
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

