import React, {Component, Fragment} from "react";
import {getStore, setupReduxConnection} from "../redux";
import {updateMounted} from "../redux/global";
import {withRouter} from "react-router-dom";

class App extends Component {
  async componentDidMount() {
    let {dispatch} = getStore();

    // LOAD REDUX STORES HERE
    dispatch(updateMounted(true));
  }

  render() {
    let {isMounted} = this.props.global;
    let {children} = this.props;

    // Inside the isMounted is where you want to load thje

    return (
      <Fragment>
        {isMounted ? (
          <div>
            {children}
          </div>
        ) : (
          <div/>
        )}
      </Fragment>
    );
  }
}

export default setupReduxConnection(["global"])(withRouter(App));
