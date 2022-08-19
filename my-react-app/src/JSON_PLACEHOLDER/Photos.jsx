import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import request, { SwitchMode } from "./helper";
export default class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: null,
    };
    this.closeModal = this.closeModal.bind(this);
  }
  async componentDidMount() {
    await request(
      `https://jsonplaceholder.typicode.com/photos?albumId=${this.props.album.id}`,
      "GET"
    ).then((photos) => {
      this.setState({ photos });
    });
  }
  closeModal() {
    this.props.closeModal();
  }
  render() {
    const { photos } = this.state;

    return (
      <SwitchMode.Consumer>
        {([mode, back]) => (
          <div id="swiperPhoto" onClick={this.closeModal}>
            <Swiper
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {photos &&
                photos.map((photo, i) => (
                  <SwiperSlide key={`swiper${i}`}>
                    <div className="swiperDiv">
                      <h4 className={`photoH4 ${mode ? "light" : "dark"}`}>
                        {photo.title}
                      </h4>
                      <img
                        src={photo.url}
                        alt={photo.id}
                        className="photoImg"
                      />
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        )}
      </SwitchMode.Consumer>
    );
  }
}
