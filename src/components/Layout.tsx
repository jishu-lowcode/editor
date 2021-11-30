import { Layout } from 'antd'
const { Header, Footer, Sider, Content } = Layout

const LayoutComponent = () => {
  return (
    <Layout className="h-screen">
      <Header>Header</Header>
      <Layout className="flex-1">
        <Sider>Sider</Sider>
        <Content>Content</Content>
        <Sider>Sider</Sider>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  )
}

export default LayoutComponent
