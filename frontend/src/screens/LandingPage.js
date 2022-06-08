import React from "react";
import { Main_1 } from "../components/Cards";

import ReactScrollWheelHandler from "react-scroll-wheel-handler";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleScrollUp = this.handleScrollUp.bind(this);
    this.handleScrollDown = this.handleScrollDown.bind(this);
  }
  componentWillMount() {
    document.body.style.overflow = "hidden";
  }

  componentWillUnmount() {
    document.body.style.overflow = "none";
  }
  handleScrollUp() {
    document.getElementsByTagName("BODY")[0].style.transform = "translateY(0%)";
    document.querySelector(".button_2").style.display = "none";
    setTimeout(function () {
      document.querySelector(".overlay").style.display = "none";
    }, 200);
    setTimeout(function () {
      document.querySelector(".main_blur").style.display = "block";
    }, 2000);
  }
  handleScrollDown() {
    document.getElementsByTagName("BODY")[0].style.transform =
      "translateY(-50%)";
    document.querySelector(".main_blur").style.display = "none";
    document.querySelector(".main_blur").style.opacity = "0";
    document.querySelector(".button_1").style.display = "none";
    setTimeout(function () {
      document.querySelector(".overlay").style.display = "block";
    }, 1000);
  }
  render() {
    return (
      <ReactScrollWheelHandler
        upHandler={this.handleScrollUp}
        downHandler={this.handleScrollDown}
        style={{ overflow: "hidden" }}
      >
        <div className="landing_page" style={{ overflow: "hidden" }}>
          <div class="main_container main_container-1">
            <Main_1 />
          </div>
        </div>
      </ReactScrollWheelHandler>
    );
  }
}

export default LandingPage;