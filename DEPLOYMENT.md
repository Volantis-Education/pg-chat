# Deploying Volantis Query Wizard to Vercel 🚀

## Prerequisites

1. A [Vercel account](https://vercel.com/signup) (free tier works great!)
2. Your project pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Environment Variables

You'll need to configure these environment variables in Vercel:

### Required Variables:

```bash
# Application Password (for team login)
APP_PASSWORD=your-secure-password-here

# Database Connection
DB_URL=postgresql://username:password@your-database-host:5432/database_name

# OpenAI API Key (for AI features)
OPENAI_API_KEY=sk-your-openai-api-key-here
```

### Optional Variables (if you want Supabase auth):

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Go to [Vercel](https://vercel.com/new)**

3. **Import your repository**
   - Click "Add New..." → "Project"
   - Select your Git provider (GitHub/GitLab/Bitbucket)
   - Find and import your repository

4. **Configure your project**
   - Framework Preset: **Next.js** (should auto-detect)
   - Root Directory: `./` (leave as default)
   - Build Command: `pnpm build` or `npm run build`
   - Output Directory: `.next` (default)
   - Install Command: `pnpm install` or `npm install`

5. **Add Environment Variables**
   - Click "Environment Variables"
   - Add each variable from the list above:
     - `APP_PASSWORD`
     - `DB_URL`
     - `OPENAI_API_KEY`
   - Make sure to add them for **Production**, **Preview**, and **Development**

6. **Deploy!**
   - Click "Deploy"
   - Wait 2-3 minutes for the build to complete
   - Your app will be live at `https://your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from your project directory**
   ```bash
   cd /path/to/pg-chat
   vercel
   ```

4. **Follow the prompts**
   - Link to existing project or create new one
   - Set up environment variables when prompted

5. **Deploy to production**
   ```bash
   vercel --prod
   ```

## Post-Deployment

### 1. Configure Your Database Connection

Make sure your **AWS RDS instance** allows connections from Vercel:

- Add Vercel's IP ranges to your RDS security group, OR
- Make your RDS publicly accessible (if acceptable for your use case)
- Ensure your `DB_URL` is correct with the right credentials

### 2. Test Your Deployment

Visit your Vercel URL and test:
- ✅ Login with your `APP_PASSWORD`
- ✅ Database connection works
- ✅ Queries run successfully
- ✅ Charts display correctly
- ✅ CSV/PNG downloads work

### 3. Set Up a Custom Domain (Optional)

1. Go to your project in Vercel Dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., `query.volantis.com`)
4. Follow DNS configuration instructions

## Troubleshooting

### Build Fails

**Issue**: Build fails with module errors
**Solution**: Make sure all dependencies are in `dependencies` not `devDependencies`

### Database Connection Issues

**Issue**: "Connection refused" or timeout errors
**Solution**: 
- Check your RDS security group allows external connections
- Verify the `DB_URL` connection string is correct
- Test connection from your local machine first

### Environment Variables Not Working

**Issue**: App can't read environment variables
**Solution**:
- Make sure you added them in Vercel Dashboard
- Redeploy after adding new variables
- Check variable names match exactly (case-sensitive)

### OpenAI API Errors

**Issue**: AI responses fail
**Solution**:
- Verify your `OPENAI_API_KEY` is valid
- Check you have credits in your OpenAI account
- Ensure the key has proper permissions

## Continuous Deployment

Once deployed, Vercel automatically:
- ✅ Rebuilds on every push to `main` branch
- ✅ Creates preview deployments for pull requests
- ✅ Provides deployment URLs for each commit

## Monitoring

Access your deployment logs and analytics:
- **Logs**: Vercel Dashboard → Your Project → "Deployments" → Click deployment
- **Analytics**: Vercel Dashboard → Your Project → "Analytics"

## Security Recommendations

1. **Use strong `APP_PASSWORD`** - Share only with your team
2. **Rotate OpenAI API keys** regularly
3. **Use environment variables** for all secrets (never commit them)
4. **Enable Vercel Authentication** for extra security layer if needed
5. **Monitor your RDS access logs** for suspicious activity

## Support

If you need help:
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- Check Vercel deployment logs for specific errors

---

🎉 **That's it!** Your Volantis Query Wizard should now be live and accessible to your team!

