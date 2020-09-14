import React, {Component} from "react";
import * as API from './api/index'

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

  clearFullScreenImage = () => {
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
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.getImages}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            name='search'
            value={this.props.search}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInput}
          />
        </form>
      </header>

      <ul className="ImageGallery">
        {this.state.images.map(element => {
          return <li key={element.id} className="ImageGalleryItem">
            <img src={element.previewURL}
                 alt={element.tags}
                 className="ImageGalleryItem-image"
                 onClick={() => this.openImage(element.id)}/>
          </li>
        })}
      </ul>

      {this.state.images.length ? (<button onClick={this.loadMore}>Load more</button>) : null}

      {this.state.fullScreenImage ?
        (<div className="Overlay" onClick={this.clearFullScreenImage}>
          <div className="Modal">
            <img src={this.state.fullScreenImage.largeImageURL} alt=""/>
          </div>
        </div>) : null}

    </div>;
  }
}
