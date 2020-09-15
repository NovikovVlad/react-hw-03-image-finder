import React from "react";
import PropTypes from "prop-types";

export const ImageGalleryItem = ({element, openImage}) => {
  return (
    <li className="ImageGalleryItem">
      <img src={element.previewURL}
           alt={element.tags}
           className="ImageGalleryItem-image"
           onClick={() => openImage(element.id)}/>
    </li>
  )
}

ImageGalleryItem.propTypes = {
  element: PropTypes.object,
  openImage: PropTypes.func
}
