import React, { Component } from "react";
import "./css/style.css";
import request, { SwitchMode } from "./helper";
import Post from "./Post";
import Comments from "./Comments";
export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      posts: null,
      activePost: null,
    };
    this.getActivePost = this.getActivePost.bind(this);
  }
  async componentDidMount() {
    await request(
      `https://jsonplaceholder.typicode.com/posts?userId=${this.state.user.id}`,
      "GET"
    ).then((posts) => this.setState({ ...this.state, posts }));
  }
  getActivePost(activePost) {
    this.setState({ ...this.state, activePost });
  }
  render() {
    const { posts, activePost } = this.state;

    return (
      <SwitchMode.Consumer>
        {([mode, back]) => (
          <div id="mainPost" className={mode ? "lightPost" : "darkPost"}>
            {posts &&
              posts.map((post, i) => (
                <Post
                  key={`post${i}`}
                  isActivePost={this.getActivePost}
                  post={post}
                />
              ))}
            {activePost && <Comments post={activePost} />}
          </div>
        )}
      </SwitchMode.Consumer>
    );
  }
}
