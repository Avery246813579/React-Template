import React, {Component} from "react"
import {Link} from "react-router-dom";

class LoginPage extends Component {
  render() {
    return (
      <div>
        Login

        <Link to="/">
          Back
        </Link>
      </div>
    );
  }
}

export default LoginPage;
