## Optional error monitoring (Sentry)

This project can send frontend errors and performance traces to Sentry when enabled. It is off by default.

Enable steps:

1. Install the SDK (already added as a dependency):
	- `npm install @sentry/react`
2. Set an environment variable for Vite, e.g. `.env` or CI secrets:
	- `VITE_SENTRY_DSN=<your-sentry-dsn>`
3. Build or run dev:
	- `npm run dev` or `npm run build`

If `VITE_SENTRY_DSN` is not set, Sentry is not initialized and adds no runtime overhead. The app will work normally.


