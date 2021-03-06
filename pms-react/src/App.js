/* Import statements */
import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'

/* component */
import Home from './containers/home'
import Login from './containers/login'
import Forget from './containers/login/forgetpws'
import QrCode from './containers/login/qrCode'

// import Root from './containers/root'
/* App component */
export default class App extends React.Component {
  render() {
    return (
      <div>
          {/* 链接组件用于链接到其他视图 */}
          <Link to="/"></Link>
          {/*如果路径支持符匹配当前URL，则呈现路由组件 */}
          <Switch>
            <Route exact={true} path="/home" component={Home}/>
            <Route exact={true} path="/login" component={Login}/>
            <Route exact={true} path="/login/forget" component={Forget}/>
            <Route exact={true} path="/login/qrcode" component={QrCode}/>
            {/* <Route exact={true} path="/" component={Root}/> */}
          </Switch>
      </div>
    )
  }
}