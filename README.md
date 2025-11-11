# Consulting Services Website

A modern, clean, and professional consulting services website built with Next.js and Supabase.

## Features

- 🏠 **Home Page** - Hero section with animated wave graphics, services preview, and testimonials
- 📖 **About Us** - Company information and core values
- 💼 **Our Services** - Detailed service offerings
- 📞 **Contact Us** - Booking system and contact form
- 🔐 **Admin Dashboard** - Manage bookings and contact submissions
- ⚙️ **Admin Settings** - Change admin password

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Database:** Supabase (PostgreSQL)
- **Styling:** CSS Modules
- **Language:** TypeScript
- **Calendar:** react-calendar

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Supabase account and project

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Abdulah-eng/consultingservices.git
   cd consultingservices
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `env.example` to `.env.local`
   - Add your Supabase credentials:
     ```env
     NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
     SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
     ```

4. Set up the database:
   - Go to your Supabase Dashboard → SQL Editor
   - Run the `migration.sql` file (or `fix_policies.sql` if you need a quick fix)

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Database Setup

### Initial Setup

Run `migration.sql` in your Supabase SQL Editor to create:
- `bookings` table
- `contact_submissions` table
- Required indexes
- RLS policies
- Triggers for automatic timestamp updates

### Quick Fix for RLS Issues

If you encounter RLS policy errors, run `fix_policies.sql` in Supabase SQL Editor.

## Admin Access

1. Create an admin user in Supabase:
   - Go to Authentication → Users → Add User
   - Create a new user with email and password

2. Access the admin panel:
   - Navigate to `/admin/login`
   - Log in with your admin credentials

3. Admin features:
   - View all bookings and contact submissions
   - Update booking/contact status
   - Change admin password in Settings

## Project Structure

```
├── app/
│   ├── about/          # About Us page
│   ├── admin/          # Admin dashboard, login, settings
│   ├── api/            # API routes (bookings, contact)
│   ├── contact/        # Contact Us page
│   ├── services/       # Services page
│   └── page.tsx        # Home page
├── components/         # React components
├── lib/               # Utility functions
├── public/            # Static assets
├── migration.sql      # Database migration script
├── schema.sql         # Database schema
└── fix_policies.sql   # Quick RLS policy fix
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon key | Yes |
| `SUPABASE_SERVICE_ROLE_KEY` | Your Supabase service role key | Recommended |

**Note:** The service role key is recommended for server-side API routes as it bypasses RLS. Never expose it in client-side code!

## Features in Detail

### Booking System
- Calendar-based date selection
- 30-minute time slot booking
- Prevents double-booking
- Form validation

### Contact Form
- Name, email, phone, and message fields
- Form validation
- Success/error feedback

### Admin Dashboard
- View all bookings with filtering
- View all contact submissions
- Update status of bookings and contacts
- Responsive design

## Troubleshooting

### RLS Policy Errors

If you see "new row violates row-level security policy":
1. Make sure you've added `SUPABASE_SERVICE_ROLE_KEY` to `.env.local`
2. Or run `fix_policies.sql` in Supabase SQL Editor
3. Restart your dev server

### Environment Variables Not Loading

- Make sure `.env.local` is in the project root
- Restart the dev server after adding/changing variables
- Never commit `.env.local` to git (it's in `.gitignore`)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Support

For issues and questions, please open an issue on GitHub.

---

Built with ❤️ using Next.js and Supabase

