import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Input, Layout, Icon, Form, Switch } from 'antd'
import 'antd/dist/antd.css'  
import '../index.css'

const FormItem = Form.Item
export default class QrCode extends React.Component {
    goPwsLogin = () => {
        window.location.href='../login'
    }
    render() {
        return (
            <div className='code-user'>
                <div className='code-header'>
                    <img src={require('../../../res/login/logo.png')}/>
                </div>
                <div className='code-content'>
                    <div className='code-content-main'>
                        <div className='code-content-header'>
                            <span className="code-mt-title">扫码登录</span>
                            <span className="user-mt-img" onClick={this.goPwsLogin}></span>
                        </div>
                        <div className='code-content-usercode'>
                            <div className='usercode-img'>
                                <img src={require('../../../res/login/qr_code.png')}/>
                            </div>
                            <div className='usercode-app'>
                                <div><a>请用管家助手APP</a></div>
                                <div><a>扫描二维码登录</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}