import axios from 'axios';

// https://pixabay.com/api/?key=18301790-18086bbe5ae929649d07b40f0

export const getImages = (search, page = 1) => {
  return axios.get(`https://pixabay.com/api/?q=${search}&page=${page}&key=18301790-18086bbe5ae929649d07b40f0&image_type=photo&orientation=horizontal&per_page=12`)
}
