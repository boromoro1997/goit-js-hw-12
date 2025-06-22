import axios from 'axios';
const myKey = '50870264-4cff09f0574465c81a14bcda1';
const baseUrl = 'https://pixabay.com/api/';
// export function ygetImagesByQuer(query) {
//   const params = {
//     key: myKey,
//     q: query,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//     lang: 'en',
//   };

//   return axios(baseUrl, { params }).then(({ data }) => {
//     return data.hits;
//   });
// }
// let page = 1;
export async function getImagesByQuery(query, page = 1) {
  const params = {
    key: myKey,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    lang: 'en',
    per_page: 15,
    page,
  };
  const { data } = await axios(baseUrl, { params });
  const maxPages = Math.ceil(data.totalHits / params.per_page);
  return {
    maxPages,
    images: data.hits,
  };
}
// getImagesByQuery('cat', page)
//   .then(({ maxPages, images }) => {
//     console.log(images);
//     console.log(maxPages);
//   })
//   .catch(er => {
//     console.log(er);
//   });
