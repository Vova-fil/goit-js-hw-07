import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryItemsContainer = document.querySelector('.gallery');

const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

galleryItemsContainer.insertAdjacentHTML('beforeend', galleryItemsMarkup);

galleryItemsContainer.addEventListener('click', onOpenModal);

galleryItemsContainer.addEventListener('keydown', onEscCloseModal);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `;
    })
    .join('');
}

let image;

// function createImgInModal(event) {
//   event.preventDefault();
//   image = basicLightbox.create(
//     `<div class="modal">
//     <img src="${event.target.dataset.source}">
//     </div>`
//   );
//   image.show();
// }

// function onEscKeyPress(e) {
//   const ESC_KEY_CODE = 'Escape';
//   const isEscKey = e.code === ESC_KEY_CODE;

//   if (isEscKey) {
//     image.close();
//   }
// }

function createImgInModal(e) {
  image = basicLightbox.create(`
    <img src=${e.target.dataset.source}>`);
}

function onOpenModal(e) {
  e.preventDefault();
  window.addEventListener('keydown', onEscCloseModal);

  createImgInModal(e);
  image.show();
}

function onEscCloseModal(e) {
  e.preventDefault();
  window.removeEventListener('keydown', onEscCloseModal);

  if (e.code === 'Escape') {
    image.close();
  }
}

console.log(galleryItems);
