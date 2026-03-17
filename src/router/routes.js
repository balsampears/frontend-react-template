/**
 * 路由配置
 */
import Home from '../pages/Home';
import About from '../pages/About';

export const routes = [
  { path: '/', element: Home, title: '首页' },
  { path: '/about', element: About, title: '关于' },
];
