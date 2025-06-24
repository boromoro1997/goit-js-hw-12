// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
  button,
} from './js/render-functions';
let page = 1;
const form = document.querySelector('.form');
form.addEventListener('submit', searchSubmit);
let searchedWord;
async function searchSubmit(e) {
  e.preventDefault();
  showLoader();
  clearGallery();
  searchedWord = form.elements['search-text'].value.trim();
  if (searchedWord === '') {
    hideLoader();
    return iziToast.show({
      message: '❌ you must write something!!',
      backgroundColor: 'red',
      position: 'topRight',
    });
  }
  page = 1;
  try {
    const { images, maxPages } = await getImagesByQuery(searchedWord, page);
    if (images.length === 0) {
      return iziToast.show({
        message:
          '❌ Sorry, there are no images matching your search query. Please try again!',
        backgroundColor: 'red',
        position: 'topRight',
      });
    }
    createGallery(images);
    if (page < maxPages) {
      showLoadMoreButton();
    }
  } catch (error) {
    let userMessage = 'Щось пішло не так. Спробуйте ще раз пізніше.';
    if (error.response && error.response.status >= 500) {
      userMessage = 'Сервер тимчасово недоступний, вибачте за незручності';
    } else if (error.response && error.response.status >= 400) {
      userMessage =
        'Невірний запит або недоступний ресурс. Перевірте введені дані.';
    }
    iziToast.show({
      message: userMessage,
      backgroundColor: 'red',
      position: 'topRight',
    });
  } finally {
    hideLoader();
    form.reset();
  }
}

//   getImagesByQuery(searchedWord, page)
//     .then(({ maxPages, images }) => {
//       page = 1;
//       if (images.length === 0) {
//         return iziToast.show({
//           message:
//             '❌ Sorry, there are no images matching your search query. Please try again!',
//           backgroundColor: 'red',
//           position: 'topRight',
//         });
//       }
//       createGallery(images);
//       if (page < maxPages) {
//         showLoadMoreButton();
//       }
//     })
//     .catch(er =>
//       iziToast.show({
//         message: `Server error : ${er}`,
//       })
//     )
//     .finally(() => {
//       hideLoader();
//       form.reset();
//     });
button.addEventListener('click', handleClick);
async function handleClick() {
  page++;
  hideLoadMoreButton();
  showLoader();
  try {
    const { images, maxPages } = await getImagesByQuery(searchedWord, page);
    createGallery(images);
    const card = document.querySelector('.gallery-item');
    const { height } = card.getBoundingClientRect();
    if (page < maxPages) {
      showLoadMoreButton();
    }
    if (page >= maxPages) {
      iziToast.show({
        message: "We're sorry, but you've reached the end of search results.",
        backgroundColor: 'blue',
        position: 'topRight',
      });
    }
    window.scrollBy({
      top: height * 2,
      behavior: 'smooth',
    });
  } catch (error) {
    let userMessage = 'Щось пішло не так. Спробуйте ще раз пізніше.';
    if (error.response && error.response.status >= 500) {
      userMessage = 'Сервер тимчасово недоступний, вибачте за незручності';
    } else if (error.response && error.response.status >= 400) {
      userMessage =
        'Невірний запит або недоступний ресурс. Перевірте введені дані.';
    }
    iziToast.show({
      message: userMessage,
      backgroundColor: 'red',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}
