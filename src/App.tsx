import React from 'react';

import { Routes, Route } from 'react-router-dom';
import * as Sentry from '@sentry/react';
const SentryRoutes = Sentry.withSentryReactRouterV6Routing(Routes);

function App() {
    return (
        <SentryRoutes>
            <Route>
                <Route path={'/'} element={<React.Fragment> TEST </React.Fragment>} />
            </Route>
        </SentryRoutes>
    );
}

export default App;
