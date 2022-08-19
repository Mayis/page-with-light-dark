import React, { Component } from "react";
import Users from "./Users";
import "./css/style.css";
import { SwitchMode } from "./helper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      light: true,
      back: false,
    };
    this.switchLight = this.switchLight.bind(this);
    this.goBack = this.goBack.bind(this);
  }
  switchLight() {
    this.setState({ light: !this.state.light });
  }
  goBack() {
    this.setState({ back: true });
  }
  render() {
    const { light, back } = this.state;

    return (
      <SwitchMode.Provider value={[light, back]}>
        <header id="header" className={light ? "lightHead" : "nightHead"}>
          <div className="backDiv" onClick={this.goBack}>
            <FontAwesomeIcon
              icon={faBackward}
              className={`backIcon ${light ? "light" : "dark"}`}
            />
          </div>
          <label className="switch">
            <input type="checkbox" onClick={this.switchLight} />
            <span className="slider"></span>
          </label>
        </header>

        <Users />
      </SwitchMode.Provider>
    );
  }
}
