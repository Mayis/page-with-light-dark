import React, { Component } from "react";
import "./css/style.css";
import request, { SwitchMode } from "./helper";
import Photos from "./Photos";
export default class Album extends Component {
  constructor(props) {
    super(props);

    this.getActiveAlbum = this.getActiveAlbum.bind(this);
  }
  getActiveAlbum() {
    this.props.activeAlbum(this.props.album);
  }
  render() {
    const { id, title } = this.props.album;
    return (
      <SwitchMode.Consumer>
        {([mode, back]) => (
          <>
            <div className="oneAlbum" onClick={this.getActiveAlbum}>
              <p className={`albumId ${mode ? "lightId" : "darkId"}`}>{id}</p>
              <h4 className={`albumTitle ${mode ? "lightTitle" : "darkTitle"}`}>
                {title}
              </h4>
            </div>
          </>
        )}
      </SwitchMode.Consumer>
    );
  }
}
