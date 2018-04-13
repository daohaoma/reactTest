import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Input, Layout, Icon, Form } from 'antd'
import 'antd/dist/antd.css'  
import './index.css'
import '../../index'
// import CreateForm  from '../form'

const FormItem = Form.Item
export default class Login extends React.Component { 
  componentDidMount() {
    // const niceForm = createForm((props) => { <div>123</div> })
    // console.log(CreateForm.form)
  }
  render() { 
    // const { getFieldDecorator } = this.props.form
    console.log(this.props.form)
    return ( 
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
                    <a href="" className="login-goregister">还没账号，去注册 -></a>
                  </FormItem>
                </div>
              </Form>
              <Form>
                
              </Form>
            </div>
          </div>
         </div>
       </div>
    )
  } 
}