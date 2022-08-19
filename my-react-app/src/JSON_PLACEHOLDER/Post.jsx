import React, { Component } from "react";
import { SwitchMode } from "./helper";
export default class Post extends Component {
  constructor(props) {
    super(props);
    this.getActivePost = this.getActivePost.bind(this);
  }
  getActivePost() {
    this.props.isActivePost(this.props.post);
  }
  render() {
    const { title, body } = this.props.post;
    return (
      <SwitchMode.Consumer>
        {([mode, back]) => (
          <div className="onePost" onClick={this.getActivePost}>
            <h4 className={`postTitle  ${mode ? "light" : "dark"}`}>{title}</h4>
            <p className={`postBody  ${mode ? "light" : "dark"}`}>{body}</p>
          </div>
        )}
      </SwitchMode.Consumer>
    );
  }
}
