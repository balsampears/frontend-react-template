import { Routes, Route, Link } from 'react-router-dom';
import { ConfigProvider, Layout, Menu } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import { routes } from './router/routes';

function App() {
  const { Header, Content } = Layout;

  const menuItems = routes.map(({ path, title }) => ({
    key: path,
    label: <Link to={path}>{title}</Link>,
  }));

  return (
    <ConfigProvider locale={zhCN}>
      <Layout style={{ minHeight: '100vh' }}>
        <Header>
          <Menu theme="dark" mode="horizontal" items={menuItems} />
        </Header>
        <Content>
          <Routes>
            {routes.map(({ path, element: Element }) => (
              <Route key={path} path={path} element={<Element />} />
            ))}
          </Routes>
        </Content>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
