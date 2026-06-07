# Portfolio_sathvika
Portfolio for `Laxmi Sathvika Bhupathi` built with [Next.js](https://nextjs.org) (App Router) and Tailwind CSS.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Edit the portfolio content in `src/app/page.tsx`.

Note: Update the placeholder `LinkedIn` and `GitHub` URLs in `src/app/page.tsx` to your real profiles.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel (from GitHub)

1. Create a GitHub repository (empty is fine).
2. Push this project to it:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin <YOUR_GITHUB_REPO_URL>
   git push -u origin main
   ```
3. In Vercel, click **Add New...** and select the GitHub repository.
4. Use these settings:
   - Framework preset: **Next.js**
   - Build command: `npm run build`
   - Output / Root directory: (default, leave as-is)

After Vercel builds successfully, your portfolio URL will be live.
