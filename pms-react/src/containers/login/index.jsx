import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Input, Layout, Icon, Form, Switch } from 'antd'
import 'antd/dist/antd.css'  
import './index.css'
import '../../index'
// import CreateForm  from '../form'

const FormItem = Form.Item
export default class Login extends React.Component { 
  state={
    showLogin: true,
    showPassword: false,
  }
  componentDidMount() {
    // const niceForm = createForm((props) => { <div>123</div> })
    // console.log(CreateForm.form)
    console.log('1212')
  }
  showPassword = () => {
    this.setState({ showPassword: !this.state.showPassword })
  }
  showLogin = () => {
    this.setState({ showLogin: true })
  }
  showRegist = () => {
    this.setState({ showLogin: false })
  }
  render() { 
    // const { getFieldDecorator } = this.props.form
    // console.log(this.props.form)
    return (
      <div className='first-page'>
      {this.state.showLogin ? 
        <div className='login-user'>
          <div className='login-header'>
            <img src={require('../../res/login/logo.png')}/>
          </div>
          <div className='login-content'>
            <div className="content-main">
              <div className="content-main-header">
                <span className="user-mt-title">登录</span>
                <a className="user-mt-img" href="javascript:;"></a>
              </div>
              <div className="content-main-userlogin">
                <Form>
                  <div className="userlogin-input">
                    <FormItem>
                      {/* {getFieldDecorator('safetyCode')( */}
                        <Input
                          placeholder="安全码"
                          prefix={<Icon type="safety" />}
                          size="large"
                        />
                      {/* )} */}
                    </FormItem>
                  </div>
                  <div className="userlogin-input">
                    <FormItem>
                      <Input
                        placeholder="用户名"
                        prefix={<Icon type="user" />}
                        size="large"
                      />
                    </FormItem>
                  </div>
                  <div className="userlogin-input" style={{ marginBottom: 0 }}>
                    <FormItem>
                      <Input
                        placeholder="密码"
                        prefix={<Icon type="lock" />}
                        size="large"
                        type="password"
                      />
                    </FormItem>
                  </div>
                  <div className="userlogin-button">
                    <FormItem>
                      <a className="login-forgot" href="">忘记密码</a>
                      <Button type="primary" htmlType="submit" size="large" className="login-form-button">
                        登录
                      </Button>
                      <a href="" className="login-goregister"  onClick={this.showRegist}>还没账号，去注册 -></a>
                    </FormItem>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
        : 
        <div className='regist-user'>
          <div className='regist-header'>
            <img src={require('../../res/login/logo.png')}/>
          </div>
          <div className='regist-content'>
            <div className='regist-content-main'>
              <div>
                <span className="user-mt-title">注册</span>
              </div>
              <div className='content-main-userregist'>
                <Form>
                  <FormItem>
                    <Input
                      placeholder="请输入手机号"
                      prefix={<Icon type="mobile" />}
                      size="large"
                    />
                    <div style={{ height: 10 }}/>
                    <Input
                      placeholder="公寓/公司名称"
                      prefix={<Icon type="home" />}
                      size="large"
                    />
                    <div style={{ height: 10 }}/>
                    <Input
                      placeholder="所在城市/区域"
                      prefix={<Icon type="environment-o" />}
                      size="large"
                    />
                    <div style={{ height: 10 }}/>
                    <Input
                      placeholder="联系人"
                      prefix={<Icon type="user" />}
                      size="large"
                    />
                    <div style={{ height: 10 }}/>
                    <Input
                      placeholder="验证码"
                      prefix={<Icon type="safety" />}
                      suffix={<a>发送验证码</a>}
                      size="large"
                    />
                    <div style={{ height: 10 }}/>
                    <Input
                      placeholder="密码"
                      prefix={<Icon type="lock" />}
                      suffix={<Switch onChange={this.showPassword} />}
                      size="large"
                      type={this.state.showPassword ? '' : 'password'}
                    />
                  </FormItem>
                  <FormItem>
                    <Button type="primary" htmlType="submit" size="large" className="regist-form-button">
                      注册
                    </Button>
                    <a href="" className="login-gologin" onClick={this.showLogin}>已有账号，去登录 -></a>
                  </FormItem>
                </Form>
              </div>
            </div>
          </div>
        </div> 
      }
      </div>
    )
  } 
}
// const FormApp = Form.create()(Login)
// ReactDOM.render( <FormApp /> , document.getElementById('root'))