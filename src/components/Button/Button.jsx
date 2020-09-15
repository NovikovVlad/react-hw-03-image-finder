import React from "react";
import PropTypes from "prop-types";

export const Button = ({imgExist, loadMore}) => {
  return imgExist ? (<button onClick={loadMore}>Load more</button>) : null
}

Button.propTypes = {
  imgExist: PropTypes.bool,
  loadMore: PropTypes.func
}
