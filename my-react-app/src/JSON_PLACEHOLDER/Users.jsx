import React, { Component } from "react";
import "./css/style.css";
import request, { SwitchMode } from "./helper";
import User from "./User";
import Posts from "./Posts";
import Albums from "./Albums";
export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
      activeUser: null,
      post: false,
      album: false,
    };
    this.getActiveUser = this.getActiveUser.bind(this);
    this.isPost = this.isPost.bind(this);
    this.isAlbum = this.isAlbum.bind(this);
  }
  async componentDidMount() {
    await request("https://jsonplaceholder.typicode.com/users", "GET").then(
      (users) => this.setState({ ...this.state, users })
    );
  }
  getActiveUser(activeUser) {
    this.setState({ activeUser });
  }
  isPost() {
    this.setState({ ...this.state, post: true });
  }
  isAlbum() {
    this.setState({ ...this.state, album: true });
  }
  render() {
    const { users, activeUser, post, album } = this.state;

    return (
      <SwitchMode.Consumer>
        {([mode, back]) =>
          post ? (
            <Posts user={activeUser} />
          ) : album ? (
            <Albums user={activeUser} />
          ) : (
            <div id="mainUsers" className={mode ? "lightMain" : "nightMain"}>
              {users &&
                users.map((user, i) => (
                  <User
                    key={`user${i}`}
                    isPost={this.isPost}
                    isAlbum={this.isAlbum}
                    activeUser={this.getActiveUser}
                    user={user}
                  />
                ))}
            </div>
          )
        }
      </SwitchMode.Consumer>
    );
  }
}
