import React from 'react'
import ReactDOM from 'react-dom'
import { Layout, Button, Form } from 'antd'
import 'antd/dist/antd.css'
import './index.css'
const { Header, Content, Footer, Sider } = Layout
const SubMenu = Menu.SubMenu
  
class Desktop extends React.Component {
    render() {
        return (
            <Layout>
                <Content>
                    <Button>123</Button>
                </Content>
            </Layout>
        )
    }
}
export default Desktop = Form.create()(Desktop)