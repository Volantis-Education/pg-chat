# Volantis Query Wizard 🧙‍♂️

The AI that really knows your Volantis postgres DB

## How to use

1. Clone the repository

2. Create a `.env.local` file with your configuration:

```bash
# Application Password (required for login)
APP_PASSWORD=your-secure-password-here

# Database Connection (will be pre-filled in the form)
DB_URL=postgresql://username:password@your-database-host:5432/database_name

# OpenAI API Key (required for AI features)
# Get your key from https://platform.openai.com/api-keys
OPENAI_API_KEY=your-actual-openai-key
```

**Note:** 
- `APP_PASSWORD` is the password you'll share with your team to access the app
- `DB_URL` and `OPENAI_API_KEY` will be pre-filled in the connection form
- You can connect to any PostgreSQL database (AWS RDS, Google Cloud SQL, Azure, etc.)

3. Install dependencies

```bash
pnpm install
```

4. Run the development server

```bash
pnpm run dev
```

5. Navigate to `http://localhost:3000/app` and enter your PostgreSQL connection string when prompted

## 🚀 Deployment

Ready to deploy? See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete instructions on deploying to Vercel.

### It let's you:

#### Get statistics about your database

![Get statistics about your database](/stats.png)

#### Ask it to generate SQL

![Ask it to generate SQL](/sql.png)

#### Run SQL

![Run SQL](/run-sql.png)

### This project uses:
- [Supabase](https://supabase.com/) for the database and auth
- [Next.js](https://nextjs.org/) for the framework
- [Vercel](https://vercel.com/) for the deployment
- [OpenAI](https://openai.com/) for the AI
- [Geist](https://vercel.com/font) for the Font
- [Tailwind](https://tailwindcss.com/) for the CSS
- [Shadcn](https://ui.shadcn.com/) for the UI
- [Aceternity](https://aceternity.com/) for the UI
