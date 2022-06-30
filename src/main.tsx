import React from 'react';
import { BrowserTracing } from '@sentry/tracing';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, useLocation, useNavigationType, createRoutesFromChildren, matchRoutes } from 'react-router-dom';
import App from './App';

import * as Sentry from '@sentry/react';

Sentry.init({
    dsn: 'https://test.ingest.sentry.io/000000000',
    integrations: [
        new BrowserTracing({
            routingInstrumentation: Sentry.reactRouterV6Instrumentation(React.useEffect, useLocation, useNavigationType, createRoutesFromChildren, matchRoutes),
        }),
    ],
    tracesSampleRate: 1.0,
});

function render() {
    const container = document.getElementById('root');
    if (!container) {
        return null;
    }
    const root = createRoot(container);
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>,
    );
}

(() => {
    render();
})();
