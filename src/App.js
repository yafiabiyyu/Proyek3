import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import './scss/style.scss';
import routes from './routes'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
// const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// // Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

class App extends Component {

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              {/* <Route path="/" name="Home" render={props => <TheLayout {...props}/>} /> */}
              {routes.map((route, idx) => {
                return route.component ? (
                  <Route
                  ky={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props =>
                    localStorage.getItem("user") !== null
                    ? (
                      <route.component {...props}/>
                    ): (
                      <Redirect to={{pathname:"/login"}}/>
                    )
                  }
                />
                ):null;
              })}
              <Redirect from="/" to="/dashboard"/>
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
