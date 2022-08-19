import React, { Component } from "react";
import { SwitchMode } from "./helper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopesBulk } from "@fortawesome/free-solid-svg-icons";

import "./css/style.css";
export default class User extends Component {
  constructor(props) {
    super(props);

    this.isPost = this.isPost.bind(this);
    this.isAlbum = this.isAlbum.bind(this);
  }

  isPost() {
    this.props.isPost();
    this.props.activeUser(this.props.user);
  }
  isAlbum() {
    this.props.isAlbum();
    this.props.activeUser(this.props.user);
  }
  render() {
    const { name, email } = this.props.user;
    return (
      <SwitchMode.Consumer>
        {([mode, back]) => (
          <div className={`oneUser  ${mode ? "light" : "night"}`}>
            <div className="info">
              <h4 className={`name ${mode ? "light" : "night"}`}>{name}</h4>
              <p className={`email ${mode ? "light" : "night"}`}>{email}</p>
            </div>

            <div className="icons">
              <FontAwesomeIcon
                onClick={this.isPost}
                icon={faEnvelopesBulk}
                className={`every-icon ${mode ? "light" : "night"}`}
              />
              <FontAwesomeIcon
                onClick={this.isAlbum}
                icon={faImages}
                className={`every-icon ${mode ? "light" : "night"}`}
              />
            </div>
          </div>
        )}
      </SwitchMode.Consumer>
    );
  }
}
