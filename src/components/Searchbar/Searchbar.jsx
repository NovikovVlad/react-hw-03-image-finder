import React from "react";
import PropTypes from "prop-types";
import {Modal} from "../Modal/Modal";

export const Searchbar = ({search, handleInput, getImages}) => {
  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={getImages}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          name='search'
          value={search}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleInput}
        />
      </form>
    </header>
  )
}


Modal.propTypes = {
  search: PropTypes.string,
  handleInput: PropTypes.func,
  getImages: PropTypes.func
}
