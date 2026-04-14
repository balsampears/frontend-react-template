import { Card, Button, Typography } from 'antd';

const { Title, Paragraph } = Typography;

function HomePage() {
  return (
    <div style={{ padding: 24 }}>
      <Card>
        <Title level={2}>欢迎使用 React 模板</Title>
        <Paragraph>本项目已配置 React Router 和 Ant Design，可直接开始开发。</Paragraph>
        <Button type="primary">主要按钮</Button>
      </Card>
    </div>
  );
}

export default HomePage;
