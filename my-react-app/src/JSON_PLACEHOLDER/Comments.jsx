import React, { Component } from "react";
import request, { SwitchMode } from "./helper";
import Comment from "./Comment";
export default class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: null,
    };
    this.closeModal = this.closeModal.bind(this);
  }

  async componentDidMount() {
    await request(
      `https://jsonplaceholder.typicode.com/comments?postId=${this.props.post.id}`,
      "GET"
    ).then((comments) => this.setState({ ...this.state, comments }));
  }
  async componentDidUpdate(prevProps) {
    if (prevProps.post !== this.props.post) {
      await request(
        `https://jsonplaceholder.typicode.com/comments?postId=${this.props.post.id}`,
        "GET"
      ).then((comments) => this.setState({ ...this.state, comments }));
    }
  }
  closeModal() {
    this.setState({ comments: null });
  }
  render() {
    const { comments } = this.state;

    return (
      <SwitchMode.Consumer>
        {([mode, back]) =>
          comments && (
            <div id="backgroundCom" onClick={this.closeModal}>
              <div id="comments" className={mode ? "lightCom" : "darkCom"}>
                {comments.map((comment, i) => (
                  <Comment key={`commetn${i}`} comment={comment} />
                ))}
              </div>
            </div>
          )
        }
      </SwitchMode.Consumer>
    );
  }
}
