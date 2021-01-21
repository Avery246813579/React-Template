import React, {Component} from "react"
import {ExampleFeatureButton, ExampleFeatureWrapper} from "./example-feature.style";
import SweetAlert from "sweetalert2";

class ExampleFeature extends Component {
  onButtonPress() {
    SweetAlert.fire({
      title: "Yo!",
      text: "I'm walking here",
      icon: "error",
    });
  }

  render() {
    return (
      <ExampleFeatureWrapper>
        <ExampleFeatureButton onClick={this.onButtonPress.bind(this)}>
          Feature
        </ExampleFeatureButton>
      </ExampleFeatureWrapper>
    )
  }
}

export default ExampleFeature;
