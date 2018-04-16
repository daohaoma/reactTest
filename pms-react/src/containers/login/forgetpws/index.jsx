import React from 'react'
// import ReactDOM from 'react-dom'
import { Button, Input, Icon, Form, Switch } from 'antd'
import 'antd/dist/antd.css'  
import '../index.css'

const FormItem = Form.Item
class Forget extends React.Component {
    state={
        showPassword: false,
    }
    goLogin = () => {
        window.location.href='../login'
    }
    showPassword = () => {
        this.setState({ showPassword: !this.state.showPassword })
    }
    onSubmit = () => {
      this.props.form.validateFields((err, value) => {
        if (!err) {
          console.log(value)
        }
      })
    }
    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <div className='forget-user'>
                <div className='forget-header'>
                    <img src={require('../../../res/login/logo.png')} alt='巧房科技'/>
                </div>
                <div className='forget-content'>
                    <div className="forget-content-main">
                        <div>
                            <span className="user-mt-title">重置密码</span>
                        </div>
                        <div className="content-main-userforget">
                            <Form>
                                <FormItem>
                                    {getFieldDecorator('phoneNum', {
                                        rules: [{ required: true, message: '请输入手机号' }],
                                    })(
                                        <Input
                                            placeholder="请输入手机号"
                                            prefix={<Icon type="mobile" />}
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
                                        size="large"
                                        suffix={<a>发送验证码</a>}
                                    />
                                )}
                                </FormItem>
                                <FormItem>
                                {getFieldDecorator('passWord', {
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
                                <div className="userforget-button">
                                    <FormItem>
                                        <Button type="primary" size="large" className="forget-form-button" onClick={this.onSubmit}>
                                            确定
                                        </Button>
                                        <span className="login-gologin" onClick={this.goLogin}>返回登录 -></span>
                                    </FormItem>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
// 获取form
export default Forget = Form.create()(Forget)