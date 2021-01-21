import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {getStore, setupStore} from "./redux";
import App from "./layouts/app";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import LoginPage from "./pages/entry/login-page";
import LandingPage from "./pages/landing-page";
import {routes} from "./settings/routes";
import "./utils/prototype-injector";

class Root extends Component {
  state = {isMounted: false};

  componentDidMount() {
    let {subscribe, getState} = getStore();

    subscribe(() => {
      let {isMounted} = getState().global;

      if (isMounted !== this.state.isMounted) {
        this.setState({isMounted});
      }
    });
  }

  render() {
    let {isMounted} = this.state;

    return (
      <>
        <Provider store={setupStore()}>
          <BrowserRouter>
            <Switch>
              <Route
                exact
                path="/"
                component={LandingPage}
              />

              <Route
                exact
                path="/login"
                component={LoginPage}
              />

              <Route
                path="/*"
                component={() => (
                  <App>
                    {isMounted ? (
                      <Switch>

                        {routes.map(({path, component: Component}) => (
                          <Route
                            key={path}
                            exact
                            path={`${path}`}
                          >
                            {({match, ...props}) => (
                              <Component match={match} {...props} />
                            )}
                          </Route>
                        ))}
                      </Switch>
                    ) : (
                      <div/>
                    )}
                  </App>
                )}
              />
            </Switch>
          </BrowserRouter>
        </Provider>
      </>
    );
  }
}

ReactDOM.render(<Root/>, document.getElementById("root"));
