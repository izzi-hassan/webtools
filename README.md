# Webtools Dashboard

## Auth Setup (Clerk)

1. Create a Clerk application and grab your publishable/secret keys.
2. Set the environment variables in `.env.local` (see `.env.example`).
3. Configure the following redirect URLs in the Clerk dashboard:
   - Sign-in URL: `/sign-in`
   - Sign-up URL: `/sign-up`
   - After sign-in: `/select-org`
   - After sign-up: `/select-org`
   - After sign-out: `/sign-in`

## Local Development

```bash
pnpm install
pnpm dev
```
