import React, { Component } from "react";
import { Image, Transformation, CloudinaryContext } from "cloudinary-react";
import cloudinary from "cloudinary-core";
import getImages from "./api";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";
import {
  SortableContainer,
  SortableElement,
  arrayMove
} from "react-sortable-hoc";
import { Header, AddImage, ButtonWrapper, GalleryWrapper } from "./styles";
import Photo from "./Photo";

const cloudinary_name = "dskiba";
const images_tag = "cosysoft";
const upload_preset = "yzsc9mri";

// const SortablePhoto = SortableElement(Photo);
// const SortableGallery = SortableContainer(({ images }) => {
//   return <Gallery photos={images} ImageComponent={SortablePhoto} />;
// });

class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.onSortEnd = this.onSortEnd.bind(this);
    this.state = {
      images: [],
      lightboxIsOpen: false,
      currentImage: 0
    };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

  async componentDidMount() {
    const images = await getImages(cloudinary_name, images_tag);
    this.setState({
      images
    });
    console.log(images);
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
        // _this.setState({ images: _this.state.images.concat(result) });
      }
    );
  }

  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }
  onSortEnd({ oldIndex, newIndex }) {
    this.setState({
      images: arrayMove(this.state.images, oldIndex, newIndex)
    });
  }

  render() {
    return (
      <div>
        <Header>Image Gallery</Header>
        <ButtonWrapper>
          <AddImage
            onClick={this.uploadWidget.bind(this)}
            className="upload-button"
          >
            Add Image
          </AddImage>
        </ButtonWrapper>
        <GalleryWrapper>
          <Gallery photos={this.state.images} onClick={this.openLightbox} />
          <Lightbox
            images={this.state.images}
            onClose={this.closeLightbox}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            currentImage={this.state.currentImage}
            isOpen={this.state.lightboxIsOpen}
            backdropClosesModal
          />
        </GalleryWrapper>
      </div>
    );
  }
}

export default ImageGallery;
