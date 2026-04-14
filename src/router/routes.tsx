import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';

export interface RouteConfig {
  path: string;
  element: React.ComponentType;
  title: string;
}

export const routes: RouteConfig[] = [
  { path: '/', element: Home, title: '首页' },
  { path: '/about', element: About, title: '关于' },
];
