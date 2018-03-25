import React, { Component } from "react";
import { Image, Transformation, CloudinaryContext } from "cloudinary-react";
import cloudinary from "cloudinary-core";
import axios from "axios";
import getImages from "./api";

const cloudinary_name = "dskiba";
const images_tag = "cosysoft";

const upload_preset = "yzsc9mri";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  async componentWillMount() {
    const images = await getImages(cloudinary_name, images_tag);
    this.setState({
      images,
      lightboxIsOpen: false
    });
  }
  // uploadWidget from Cloudinary
  uploadWidget() {
    let _this = this;
    window.cloudinary.openUploadWidget(
      {
        cloud_name: cloudinary_name,
        upload_preset: upload_preset,
        tag: [images_tag]
      },
      function(error, result) {
        console.log(result);
        _this.setState({ images: _this.state.images.concat(result) });
      }
    );
  }

  render() {
    let isPic = this.state.images;
    console.log("piccipipe");
    console.log(isPic);
    return (
      <div className="main">
        <h1>Galleria</h1>
        <div className="upload">
          <button
            onClick={this.uploadWidget.bind(this)}
            className="upload-button"
          >
            Add Image
          </button>
        </div>

        <div />
        <div className="gallery">
          <CloudinaryContext cloudName={cloudinary_name}>
            {this.state.images.map(data => {
              {
                let pics = data.picture;
                console.log(pics);
              }
              return (
                <div className="responsive" key={data.image}>
                  <div className="img">
                    <a target="_blank" href={data.picture}>
                      <Image publicId={data.image}>
                        <Transformation
                          crop="scale"
                          width="300"
                          dpr="auto"
                          responsive_placeholder="blank"
                        />
                      </Image>
                    </a>
                    <div className="desc">Created at {data.date}</div>
                  </div>
                </div>
              );
            })}
          </CloudinaryContext>
          <div className="clearfix" />
        </div>
      </div>
    );
  }
}

export default Main;
