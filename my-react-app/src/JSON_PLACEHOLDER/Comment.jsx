import React, { Component } from "react";
import "./css/style.css";
import { SwitchMode } from "./helper";
export default class Comment extends Component {
  render() {
    const { name, body } = this.props.comment;
    return (
      <SwitchMode.Consumer>
        {([mode, back]) => (
          <div className="oneComment">
            <h4 className={`commentName  ${mode ? "lightcom" : "darkCom"}`}>
              {name}
            </h4>
            <p className={`commentBody  ${mode ? "lightcom" : "darkCom"}`}>
              {body}
            </p>
          </div>
        )}
      </SwitchMode.Consumer>
    );
  }
}
