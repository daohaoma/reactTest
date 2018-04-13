import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Form } from 'antd'
import 'antd/dist/antd.css'
  
export default class Home extends React.Component {
    componentDidMount() {
        // console.log('1212121')
    }
  render() { 
    // console.log(this.props.form)
    return ( 
      <Button>欢迎你啊</Button>
    ) 
  } 
}
const LoginForm = Form.create()(Home)
ReactDOM.render(<LoginForm />, document.getElementById('root'))