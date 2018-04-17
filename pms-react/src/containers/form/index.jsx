import React from 'react'
// import { Form } from 'antd'
// import Login from '../login'
// export const createForm = (statelessFunc) => {
//   return Form.create()(React.createClass({
//     render() {
//       return statelessFunc(this.props)
//     }
//   }))
// }
export default class CreateForm extends React.Component {
  componentDidMount() {
    console.log(this.props.form)
  }
  render() {
    return (
      <div>123</div>
    )
  }
}