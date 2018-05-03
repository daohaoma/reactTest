import React from 'react'
// import ReactDOM from 'react-dom'
import { Button, Input, Icon, Form, Switch, Modal, Alert } from 'antd'
import 'antd/dist/antd.css'  
import './index.css'
import validator from '../../validator'
import 'whatwg-fetch'
import 'es6-promise'
import axios from 'axios'
import Api from '../../api'

const FormItem = Form.Item
class Login extends React.Component { 
  state={
    showLogin: true,
    showPassword: false,
    showLoginPassword: false,
    showSuccess: false,
  }
  componentDidMount() {
    // let params = {
    //   gcid: "0210032",
    //   params:{
    //     accountName: "admin",
    //     accountPwd: "123456",
    //     gcid: "0210032",
    //   },
    //   token: "",
    //   userid: "",
    // }
    // axios.post('/v2/jjr_user_login/pc_login', params).then((res) => {
    //   console.log(res)
    // }).catch((error)=>{
    //     console.log(error)
    // })
    console.log(Api.login)
  }
  showPassword = () => {
    this.setState({ showPassword: !this.state.showPassword })
  }
  showLoginPassword = () => {
    this.setState({ showLoginPassword: !this.state.showLoginPassword })
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
  error = val => {
    Modal.error({
      title: '输入信息有误',
      content: val,
    });
  }
  loginSubmit = () => {
    this.props.form.validateFields((err, value) => {
      if (!err) {
        // console.log(value)
        let params = {
          gcid: value.safetyCode,
          params:{
            accountName: value.userName,
            accountPwd: value.loginPassWord,
            gcid: value.safetyCode,
          },
          token: "",
          userid: "",
        }
        axios.post(Api.login, params).then((res) => {
          // console.log(res)
          let data = res.data
          if(res.status === 200) {
            if(data.status.code === '200') {
              this.setState({ showSuccess: true })
              window.location.href = './home'
            } else if(data.status.code === '1012') {
              this.error(data.status.msg)
            } else if(data.status.code === '1007') {
              this.error('请检查用户名是否正确！')
            } else if(data.status.code === '99') {
              this.error('请检查密码是否正确！')
            }
          } else {
            console.log('网络错误!')
          }
        }).catch((error)=>{
          console.log(error)
        })
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
                            // pattern: validator.password.pattern,
                            message: '请输入正确密码'
                          }],
                        })(
                          <Input
                            placeholder="密码"
                            prefix={<Icon type="lock" />}
                            suffix={<Switch onChange={this.showLoginPassword} />}
                            size="large"
                            type={this.state.showLoginPassword ? '' : 'password'}
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
            {this.state.showSuccess ? 
              <div className='success-alert'>
                <Alert
                  message=""
                  type="success"
                  description="登陆成功！"
                  showIcon
                  style={{ height: 80 }}
                />
              </div> : ''}
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