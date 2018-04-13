import React from 'react'
import { Form } from 'antd'
import Login from '../login'
// export const createForm = (statelessFunc) => {
//   return Form.create()(React.createClass({
//     render() {
//       return statelessFunc(this.props)
//     }
//   }))
// }
export default class CreateForm extends React.Component {
  render() {
    return Form.create()(Login)
  }
}