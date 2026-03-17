import { Card, Typography } from 'antd';

const { Paragraph } = Typography;

function AboutPage() {
  return (
    <div style={{ padding: 24 }}>
      <Card title="关于">
        <Paragraph>这是一个基于 React + React Router + Ant Design 的模板项目。</Paragraph>
      </Card>
    </div>
  );
}

export default AboutPage;
