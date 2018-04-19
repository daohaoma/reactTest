import React from 'react'
// import ReactDOM from 'react-dom'
import { Button, Input, Icon, Form, Switch } from 'antd'
import 'antd/dist/antd.css'  
import './index.css'
import validator from '../../validator'
import 'whatwg-fetch'
import 'es6-promise'
import axios from 'axios'

const FormItem = Form.Item
class Login extends React.Component { 
  state={
    showLogin: true,
    showPassword: false,
  }
  componentDidMount() {
    let params = {
      gcid: "0210032",
      params:{
        accountName: "admin",
        accountPwd: "123456",
        gcid: "0210032",
      },
      token: "",
      userid: "",
    }
    axios.post('http://pms.test.qiaofangyun.com/v2/jjr_user_login/pc_login', params).then((res) => {
      console.log(res)
    }).catch((error)=>{
        console.log(error)
    })

    // const headers = new Headers({
    //   "Content-Type": 'application/json',
    //   "Accept": 'application/json',
    //   // "Origin": '*',
    //   // "Access-Control-Allow-Origin": '*'
    // })
    // fetch('http://pms.test.qiaofangyun.com/v2/jjr_user_login/pc_login', {
    //   method: 'POST',
    //   mode: 'cors',
    //   headers: headers,
    //   body: JSON.stringify(params),
    // }).then((res)=>{
    //   console.log(res)
    // }).catch((res)=>{
    //     console.log(res.status)
    // })

    // axios.get('/v2/movie/top250').then((res) => {
    //   console.log(res)
    // })
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
  goForget = () => {
    window.location.href = './login/forget'
  }
  goCodeLogin = () => {
    window.location.href = './login/qrcode'
  }
  loginSubmit = () => {
    this.props.form.validateFields((err, value) => {
      if (!err) {
        console.log(value)
      }
    })
  }
  registSubmit = () => {
    this.props.form.validateFields((err, value) => {
      if (!err) {
        console.log(value)
      }
    })
  }
  render() { 
    const { getFieldDecorator } = this.props.form
    // console.log(this.props.form)
    return (
      <div className='first-page'>
        {this.state.showLogin ? 
          <div className='login-user'>
            <div className='login-header'>
              <img src={require('../../res/login/logo.png')} alt='巧房科技'/>
            </div>
            <div className='login-content'>
              <div className="content-main">
                <div className="content-main-header">
                  <span className="user-mt-title">登录</span>
                  <span className="user-mt-img" onClick={this.goCodeLogin}></span>
                </div>
                <div className="content-main-userlogin">
                  <Form>
                      <FormItem>
                        {getFieldDecorator('safetyCode', {
                          rules: [{ required: true, message: '请输入安全码' }],
                        })(
                          <Input
                            placeholder="安全码"
                            prefix={<Icon type="safety" />}
                            size="large"
                          />
                         )}
                      </FormItem>
                      <FormItem>
                        {getFieldDecorator('userName', {
                          rules: [{ required: true, message: '请输入用户名' }],
                        })(
                          <Input
                            placeholder="用户名"
                            prefix={<Icon type="user" />}
                            size="large"
                          />
                        )}
                      </FormItem>
                      <FormItem>
                        {getFieldDecorator('loginPassWord', {
                          rules: [{
                            required: true,
                            pattern: validator.password.pattern,
                            message: '请输入正确密码'
                          }],
                        })(
                          <Input
                            placeholder="密码"
                            prefix={<Icon type="lock" />}
                            size="large"
                            type="password"
                          />
                        )}
                      </FormItem>
                    <div className="userlogin-button">
                      <FormItem>
                        <div className="login-forgot" onClick={this.goForget}>忘记密码</div>
                        <Button type="primary" htmlType="submit" size="large" className="login-form-button" onClick={this.loginSubmit}>
                          登录
                        </Button>
                        <span className="login-goregister" onClick={this.showRegist}>还没账号，去注册 -></span>
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
              <img src={require('../../res/login/logo.png')} alt='巧房科技'/>
            </div>
            <div className='regist-content'>
              <div className='regist-content-main'>
                <div>
                  <span className="user-mt-title">注册</span>
                </div>
                <div className='content-main-userregist'>
                  <Form>
                    <FormItem>
                      {getFieldDecorator('phone', {
                        rules: [{
                          required: true,
                          pattern: validator.phone.pattern,
                          message: '请输入正确手机号码'
                        }],
                      })(
                        <Input
                          placeholder="请输入手机号"
                          prefix={<Icon type="mobile" />}
                          size="large"
                        />
                      )}
                    </FormItem>
                    <FormItem>
                      {getFieldDecorator('apartment', {
                        rules: [{ required: true, message: '请输入公寓/公司名称' }],
                      })(
                        <Input
                          placeholder="公寓/公司名称"
                          prefix={<Icon type="home" />}
                          size="large"
                        />
                      )}
                    </FormItem>                       
                    <FormItem>
                      {getFieldDecorator('area', {
                        rules: [{ required: true, message: '请输入所在城市/区域' }],
                      })(
                        <Input
                          placeholder="所在城市/区域"
                          prefix={<Icon type="environment-o" />}
                          size="large"
                        />
                      )}
                    </FormItem>                       
                    <FormItem>
                      {getFieldDecorator('contacts', {
                        rules: [{ required: true, message: '请输入联系人' }],
                      })(
                        <Input
                          placeholder="联系人"
                          prefix={<Icon type="user" />}
                          size="large"
                        />
                      )}
                    </FormItem>                       
                    <FormItem>
                      {getFieldDecorator('testCode', {
                        rules: [{ required: true, message: '请输入验证码' }],
                      })(
                        <Input
                          placeholder="验证码"
                          prefix={<Icon type="safety" />}
                          suffix={<a>发送验证码</a>}
                          size="large"
                        />
                      )}
                    </FormItem>                      
                    <FormItem>
                      {getFieldDecorator('registPassWord', {
                        rules: [{ required: true, message: '请输入密码' }],
                      })(
                        <Input
                          placeholder="密码"
                          prefix={<Icon type="lock" />}
                          suffix={<Switch onChange={this.showPassword} />}
                          size="large"
                          type={this.state.showPassword ? '' : 'password'}
                        />
                      )}
                    </FormItem>
                    <FormItem>
                      <Button type="primary" htmlType="submit" size="large" className="regist-form-button" onClick={this.registSubmit}>
                        注册
                      </Button>
                      <span className="login-gologin" onClick={this.showLogin}>已有账号，去登录 -></span>
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
// 获取form
export default Login = Form.create()(Login)