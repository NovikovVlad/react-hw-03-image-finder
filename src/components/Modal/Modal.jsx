import React, {Component} from "react";
import PropTypes from "prop-types";

export class Modal extends Component {
  handleCloseModal = (e) => {
    if (e.keyCode === 27) {
      this.props.clearFullScreenImage();
    }
  };

  componentDidMount = () => window.addEventListener('keydown', this.handleCloseModal);
  componentWillUnmount = () => window.removeEventListener('keydown', this.handleCloseModal);

  render() {
    return this.props.fullScreenImage ?
      (<div className="Overlay" onClick={this.props.clearFullScreenImage}>
        <div className="Modal">
          <img src={this.props.fullScreenImage.largeImageURL} alt=""/>
        </div>
      </div>) :
      null
  }
}

Modal.propTypes = {
  fullScreenImage: PropTypes.object,
  clearFullScreenImage: PropTypes.func
}

