import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Form } from 'antd'
import 'antd/dist/antd.css'
  
class Home extends React.Component {
  componentDidMount() {}
  render() { 
    // console.log(this.props.form)
    return ( 
      <Button>欢迎你啊</Button>
    ) 
  } 
}
export default Home = Form.create()(Home)