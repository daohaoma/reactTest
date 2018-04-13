import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Input, Layout, Icon, Form, Switch } from 'antd'
import 'antd/dist/antd.css'  
import '../index.css'

const FormItem = Form.Item
export default class Forget extends React.Component {
    state={
        showPassword: false,
    }
    goLogin = () => {
        window.location.href='../login'
    }
    showPassword = () => {
        this.setState({ showPassword: !this.state.showPassword })
    }
    render() {
        return (
            <div className='forget-user'>
                <div className='forget-header'>
                    <img src={require('../../../res/login/logo.png')}/>
                </div>
                <div className='forget-content'>
                    <div className="forget-content-main">
                        <div>
                            <span className="user-mt-title">重置密码</span>
                        </div>
                        <div className="content-main-userforget">
                            <Form>
                                <div className="userforget-input">
                                    <FormItem>
                                    {/* {getFieldDecorator('safetyCode')( */}
                                        <Input
                                            placeholder="请输入手机号"
                                            prefix={<Icon type="mobile" />}
                                            size="large"
                                        />
                                    {/* )} */}
                                    </FormItem>
                                </div>
                                <div className="userforget-input">
                                    <FormItem>
                                    <Input
                                        placeholder="验证码"
                                        prefix={<Icon type="safety" />}
                                        size="large"
                                        suffix={<a>发送验证码</a>}
                                    />
                                    </FormItem>
                                </div>
                                <div className="userforget-input">
                                    <FormItem>
                                    <Input
                                        placeholder="密码"
                                        prefix={<Icon type="lock" />}
                                        suffix={<Switch onChange={this.showPassword} />}
                                        size="large"
                                        type={this.state.showPassword ? '' : 'password'}
                                    />
                                    </FormItem>
                                </div>
                                <div className="userforget-button">
                                    <FormItem>
                                        <Button type="primary" htmlType="submit" size="large" className="forget-form-button">
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