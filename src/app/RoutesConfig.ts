import React from 'react';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';

type RouteConfig = {
    path: string,
    component: React.ComponentType,
    exact?: boolean
}

export const RoutesConfig = <RouteConfig[]>[
    {
        path: '/home',
        component: HomePage,
        exact: true
    },
    {
        path: '/about',
        component: AboutPage
    },
    {
        path: '/contact',
        component: ContactPage
    }
];