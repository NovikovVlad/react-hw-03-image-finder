import React from "react";
import {ImageGalleryItem} from "../ImageGalleryItem/ImageGalleryItem";
import {Button} from "../Button/Button";
import PropTypes from "prop-types";

export const ImageGallery = ({images, openImage, loadMore}) => {
  return (
    <div>
      <ul className="ImageGallery">
        {images.map(element => <ImageGalleryItem key={element.id} element={element} openImage={openImage}/>)}
      </ul>
      <Button imgExist={!!images.length} loadMore={loadMore}/>
    </div>
  )
}


ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  openImage: PropTypes.func,
  loadMore: PropTypes.func,
}
