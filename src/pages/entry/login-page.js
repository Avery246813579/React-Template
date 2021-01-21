import React, {Component} from "react"
import {Link} from "react-router-dom";
import LoginModal from "../../modals/entry/login-modal";
import {setupReduxConnection} from "../../redux";

class LoginPage extends Component {
  render() {
    let {isMounted} = this.props.entry;

    console.log("are we mounted?", isMounted);

    return (
      <div>
        <LoginModal ref={(e) => this.loginModel = e} />
        Login

        <a href="#" onClick={() => this.loginModel.open()}>
          Click to login
        </a>

        <Link to="/">
          Back
        </Link>
      </div>
    );
  }
}

export default setupReduxConnection(["entry"])(LoginPage);
