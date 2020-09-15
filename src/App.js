import React, {Component} from "react";
import PropTypes from "prop-types";

import * as API from './api/index'

import {Searchbar} from "./components/Searchbar/Searchbar";
import {ImageGallery} from "./components/ImageGallery/ImageGallery";
import {Modal} from "./components/Modal/Modal";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      search: '',
      page: 0,
      fullScreenImage: null
    }
  }

  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  getImages = (e) => {
    e.preventDefault();

    if (!this.state.search) {
      this.setState({images: [], page: 0});
      return;
    }

    API.getImages(this.state.search)
      .then(({data}) => {
        this.setState(({images}) => {
          return {
            images: [...data.hits],
            page: 1
          }
        })
      })
  }

  loadMore = (e) => {
    e.preventDefault();
    API.getImages(this.state.search, this.state.page + 1)
      .then(({data}) => {
        this.setState(({images, page}) => {
          return {
            images: [...images, ...data.hits],
            page: ++page
          }
        })
      })
  }

  openImage = (id) => {
    this.setState(({images}) => {
      const fullScreenImage = images.find((elem) => elem.id === id);
      return {fullScreenImage}
    })
  }

  clearFullScreenImage = (e) => {
    console.log(e);
    this.setState({fullScreenImage: null})
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    const prev = prevState.images;
    const next = this.state.images;

    if (prev.length < next.length) {
      return next.length - prev.length
    }

    return 0
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  render() {
    return <div>
      <Searchbar search={this.state.search} handleInput={this.handleInput} getImages={this.getImages}/>
      <ImageGallery images={this.state.images} openImage={this.openImage} loadMore={this.loadMore}/>
      <Modal fullScreenImage={this.state.fullScreenImage} clearFullScreenImage={this.clearFullScreenImage}/>
    </div>;
  }
}

App.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  search: PropTypes.string,
  page: PropTypes.number,
  fullScreenImage: PropTypes.object
}

App.defaultProps = {
  images: [],
  search: '',
  page: 0,
  fullScreenImage: null
}
