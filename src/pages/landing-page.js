import React, {Component} from "react"
import {Link} from "react-router-dom";

class LandingPage extends Component {
  render() {
    return (
      <div>
        Landing

        <Link to="login">
          Login
        </Link>
      </div>
    );
  }
}

export default LandingPage;
