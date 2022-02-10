import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/';

const setParams = ({ q, page }) =>
  (axios.defaults.params = {
    q,
    page,
    key: '25288753-ae0a850a1a7487bf73bd69a50',
    per_page: 12,
    image_type: 'photo',
    orientation: 'horizontal',
  });
export const picturesApi = (q = '', page = 1) => {
  setParams({ q, page });
  return axios
    .get('api/')
    .then(res => {
      if (!res.data.hits.length) {
        throw new Error('Ooops...something was wrong');
      }
      return res.data.hits;
    })
    .catch(err => {
      throw err;
    });
};
