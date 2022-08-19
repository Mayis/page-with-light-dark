import React, { Component } from "react";
import "./css/style.css";
import request, { SwitchMode } from "./helper";
import Album from "./Album";
import Photos from "./Photos";
export default class Albums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeAlbum: null,
      albums: null,
    };
    this.getActiveAlbum = this.getActiveAlbum.bind(this);
    this.closePhotoModal = this.closePhotoModal.bind(this);
  }
  async componentDidMount() {
    await request(
      `https://jsonplaceholder.typicode.com/albums?userId=${this.props.user.id}`,
      "GET"
    ).then((albums) => this.setState({ albums }));
  }
  async componentDidUpdate(prevProps) {
    if (prevProps.user !== this.props.user) {
      await request(
        `https://jsonplaceholder.typicode.com/albums?userId=${this.props.user.id}`,
        "GET"
      ).then((albums) => this.setState({ albums }));
    }
  }
  getActiveAlbum(activeAlbum) {
    this.setState({ ...this.state, activeAlbum });
  }
  closePhotoModal() {
    this.setState({ ...this.state, activeAlbum: null });
  }
  render() {
    const { albums, activeAlbum } = this.state;

    return (
      <SwitchMode.Consumer>
        {([mode, back]) => (
          <div className={`albums ${mode ? "lightAlbum" : "darkAlbum"}`}>
            {albums &&
              albums.map((album, i) => (
                <Album
                  key={`album${i}`}
                  activeAlbum={this.getActiveAlbum}
                  album={album}
                />
              ))}
            {activeAlbum && (
              <Photos closeModal={this.closePhotoModal} album={activeAlbum} />
            )}
          </div>
        )}
      </SwitchMode.Consumer>
    );
  }
}
