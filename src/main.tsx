import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Optional: Sentry error and performance monitoring (env-gated)
// Will only be loaded if VITE_SENTRY_DSN is defined.
async function initSentryIfEnabled() {
	const dsn = import.meta.env.VITE_SENTRY_DSN as string | undefined;
	if (!dsn) return;
	try {
		const Sentry = await import('@sentry/react');
		const { BrowserTracing } = await import('@sentry/react');
		Sentry.init({
			dsn,
			integrations: [new BrowserTracing()],
			tracesSampleRate: 0.1, // adjust as needed
			replaysSessionSampleRate: 0.0,
		});
	} catch (e) {
		// Fail silent if package is missing or init fails
		console.warn('Sentry not initialized:', e);
	}
}

initSentryIfEnabled().finally(() => {
	createRoot(document.getElementById('root')!).render(<App />);
});
