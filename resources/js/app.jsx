import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { Provider } from 'react-redux';
import { store } from '@/Pages/Action/store';
import { Toaster } from './Components/ui/sonner';

const appName = import.meta.env.VITE_APP_NAME || '';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx')
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(
            <Provider store={store}>
                <App {...props} />
                <Toaster />
            </Provider>
        );
    },
    progress: {
        color: '#4B5563',
    },
});
