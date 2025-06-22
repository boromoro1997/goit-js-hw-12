// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
const loader = document.querySelector('.loader');
export const button = document.querySelector('.btn');
export function showLoader() {
  loader.classList.remove('hidden');
}
export function hideLoader() {
  loader.classList.add('hidden');
}
export function clearGallery() {
  gallery.innerHTML = '';
}
export function showLoadMoreButton() {
  button.classList.remove('hidden');
}
export function hideLoadMoreButton() {
  button.classList.add('hidden');
}
const gallery = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
export function createGallery(images) {
  const markUp = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src="${webformatURL}"
      alt="${tags}"
    />
  </a>
  <ul>
  <li><span class="spanText">Likes</span><br>${likes}</li>
  <li><span class="spanText">Views</span><br>${views}</li>
  <li><span class="spanText">Comments</span><br>${comments}</li>
  <li><span class="spanText">Downloads</span><br>${downloads}</li>
  </ul>
</li>`
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markUp);
  lightbox.refresh();
}
