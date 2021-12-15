import { galleryItems } from './gallery-items.js';
// Change code below this line

// const image = instance.element().querySelector('data-source="${original}"');
// const closeButton = instance.element().querySelector('button');

// const instance = basicLightbox.create(`
// <div class="modal">
// 	<h1>Dynamic Content</h1>
// 	<p>You can set the content of the lightbox with JS.</p>
//   <img src="" />
//   <button>Close</button>
// </div>
// `);

// function onButton1Click() {
//   image.src = data-source="${original}";
//   instance.show();
// }

const galleryItemsContainer = document.querySelector('.gallery');

const galleryCardMarkup = galleryItems
  .map(
    (item) =>
      `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}"
   alt="${item.description}" />
</a>`
  )
  .join('');

galleryItemsContainer.insertAdjacentHTML('beforeend', galleryCardMarkup);

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
