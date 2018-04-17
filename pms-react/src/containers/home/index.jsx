import React from 'react'
import ReactDOM from 'react-dom'
import { Layout, Menu, Breadcrumb, Icon, Form } from 'antd'
import 'antd/dist/antd.css'
import './index.css'
const { Header, Content, Footer, Sider } = Layout
const SubMenu = Menu.SubMenu
  
class Home extends React.Component {
  state = {
    collapsed: false,
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }
  componentDidMount() {}
  render() { 
    return ( 
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          width= '150'
        >
          <div className="logo">
            <img src={require('../../res/home/logo_pc.png')} alt="巧房科技"/>
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <SubMenu
              key='sub1'
              title={<span><Icon type="desktop" /><span>工作台</span></span>}
            >
              <Menu.Item key="1">待办提醒</Menu.Item>
              <Menu.Item key="2">数据统计</Menu.Item>
            </SubMenu>
            <SubMenu
              key='sub2'
              title={<span><Icon type="cloud" /><span>资源</span></span>}
            >
              <Menu.Item key="3">租客</Menu.Item>
              <Menu.Item key="4">业主</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={<span><Icon type="home" /><span>房态</span></span>}
            >
              <Menu.Item key="5">房源</Menu.Item>
              <Menu.Item key="6">待租房源</Menu.Item>
              <Menu.Item key="7">推广</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub4"
              title={<span><Icon type="solution" /><span>合同</span></span>}
            >
              <Menu.Item key="8">租客合同</Menu.Item>
              <Menu.Item key="9">业主合同</Menu.Item>
              <Menu.Item key="10">租客合同审批</Menu.Item>
              <Menu.Item key="11">业主合同审批</Menu.Item>
              <Menu.Item key="12">租客合同审批权限</Menu.Item>
              <Menu.Item key="13">业主合同审批权限</Menu.Item>
              <Menu.Item key="14">合同模板</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub5"
              title={<span><Icon type="pay-circle" /><span>财务</span></span>}
            >
              <Menu.Item key="15">房屋收支</Menu.Item>
              <Menu.Item key="16">运营收支</Menu.Item>
              <Menu.Item key="17">借还</Menu.Item>
              <Menu.Item key="18">未知款</Menu.Item>
              <Menu.Item key="19">供应商结算</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub6"
              title={<span><Icon type="customer-service" /><span>租后</span></span>}
            >
              <Menu.Item key="20">维修服务</Menu.Item>
              <Menu.Item key="21">保洁服务</Menu.Item>
              <Menu.Item key="22">投诉服务</Menu.Item>
              <Menu.Item key="23">供应商管理</Menu.Item>
              <Menu.Item key="24">宽带订单</Menu.Item>
              <Menu.Item key="25">配货</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub7"
              title={<span><Icon type="pie-chart" /><span>报表</span></span>}
            >
              <Menu.Item key="26">业务报表</Menu.Item>
              <Menu.Item key="27">财务报表</Menu.Item>
              <Menu.Item key="28">超级利润表</Menu.Item>
              <Menu.Item key="29">租金台账</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub8"
              title={<span><Icon type="area-chart" /><span>业绩</span></span>}
            >
              <Menu.Item key="30">房源业绩</Menu.Item>
              <Menu.Item key="31">业绩配置</Menu.Item>
              <Menu.Item key="32">历史业绩</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub9"
              title={<span><Icon type="setting" /><span>设置</span></span>}
            >
              <Menu.Item key="33">部门管理</Menu.Item>
              <Menu.Item key="34">角色管理</Menu.Item>
              <Menu.Item key="35">员工管理</Menu.Item>
              <Menu.Item key="36">字典管理</Menu.Item>
              <Menu.Item key="37">角色管理</Menu.Item>
              <Menu.Item key="38">安全</Menu.Item>
              <Menu.Item key="39">楼盘字典</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub10"
              title={<span><Icon type="home" /><span>企业</span></span>}
            >
              <Menu.Item key="40">企业信息</Menu.Item>
              <Menu.Item key="41">企业公告</Menu.Item>
              <Menu.Item key="42">资产管理</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub11"
              title={<span><Icon type="user" /><span>会员</span></span>}
            >
              <Menu.Item key="43">会员信息</Menu.Item>
              <Menu.Item key="44">积分兑换</Menu.Item>
              <Menu.Item key="45">商品管理</Menu.Item>
              <Menu.Item key="46">活动</Menu.Item>
              <Menu.Item key="47">积分规则</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub12"
              title={<span><Icon type="shop" /><span>营销</span></span>}
            >
              <Menu.Item key="48">优惠活动</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub13"
              title={<span><Icon type="ie" /><span>web</span></span>}
            >
              <Menu.Item key="49">关于我们</Menu.Item>
              <Menu.Item key="50">banner管理</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ position: 'fixed', width: '100%', background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <Menu
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px', display: 'inline-block' }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
            <div className='home-operation'>
              <div className='home-add'>
                <Menu
                  // onClick={this.handleClick}
                  // selectedKeys={[this.state.current]}
                  mode="horizontal"
                  style={{ height: 64 }}
                >
                  <SubMenu
                    title={<span className='menu-title'><span>+</span></span>}
                    className='home-add-menu'
                  >
                    <Menu.Item key="setting1">
                      <Icon type='file-add'/>
                      添加待办
                    </Menu.Item>
                    <Menu.Item key="setting2">
                      <Icon type='home'/>
                      房源录入
                    </Menu.Item>
                    <Menu.Item key="setting3">
                      <Icon type='copy'/>
                      合同录入
                    </Menu.Item>
                    <Menu.Item key="setting4">
                      <Icon type='form'/>
                      添加预定
                    </Menu.Item>
                    <Menu.Item key="setting5">
                      <Icon type='profile'/>
                      添加记账
                    </Menu.Item>
                  </SubMenu>
                </Menu>
              </div>
              <div className='home-user'>
                <Menu
                  // onClick={this.handleClick}
                  // selectedKeys={[this.state.current]}
                  mode="horizontal"
                  style={{ height: 64 }}
                >
                  <SubMenu
                    title={
                      <span className='home-user-title'>
                        <span className='user-head'>
                          <img src={require('../../res/home/header.png')} alt="头像"/>
                          <span style={{ marginLeft: 10 }}>王晓</span>
                        </span>
                      </span>
                    }
                    className='home-add-menu'
                  >
                    <Menu.Item key="setting1">修改密码</Menu.Item>
                    <Menu.Item key="setting2">退出</Menu.Item>
                  </SubMenu>
                </Menu>
              </div>
            </div>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            
          </Content>
        </Layout>
      </Layout>
    ) 
  } 
}
export default Home = Form.create()(Home)