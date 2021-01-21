import React, {Component} from "react"
import {Link} from "react-router-dom";
import ExampleFeature from "../features/example/example-feature";

class LandingPage extends Component {
  render() {
    return (
      <>
        <div>
          Landing

          <Link to="login">
            Login
          </Link>
        </div>

        <ExampleFeature/>
      </>
    );
  }
}

export default LandingPage;
