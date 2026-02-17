# fairshare-web

A modern expense sharing application built with Next.js 15, TypeScript, Tailwind CSS, and Supabase.

## Features

- 🚀 Next.js 15 with App Router
- 💎 TypeScript for type safety
- 🎨 Tailwind CSS with GitHub-inspired design
- 🔐 Supabase authentication
- 📱 Fully responsive layout
- ⚡ Optimized for Vercel deployment
- 🔒 Security-hardened (all vulnerabilities patched)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Supabase account (free tier available at [supabase.com](https://supabase.com))

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Vairous9x/fairshare-web.git
cd fairshare-web
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

4. Add your Supabase credentials to `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

You can find these values in your Supabase project settings at:
`https://supabase.com/dashboard/project/_/settings/api`

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
fairshare-web/
├── app/                    # Next.js app directory
│   ├── dashboard/         # Dashboard page
│   ├── login/             # Login page
│   ├── register/          # Registration page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx         # Header component
│   └── Footer.tsx         # Footer component
├── lib/                   # Utility functions
│   └── supabase/          # Supabase clients
│       ├── client.ts      # Browser client
│       ├── server.ts      # Server client
│       └── middleware.ts  # Middleware client
├── middleware.ts          # Next.js middleware
└── .env.local.example     # Environment variables template
```

## Deployment

### Deploy to Vercel

The easiest way to deploy this application is using Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Vairous9x/fairshare-web)

1. Click the button above or go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Add your environment variables in the Vercel dashboard
4. Deploy!

## Technologies Used

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Authentication**: [Supabase](https://supabase.com/)
- **Deployment**: [Vercel](https://vercel.com/)

## Security

This project uses the latest stable version of Next.js with all known security vulnerabilities patched. We regularly update dependencies to maintain security standards.

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.