
import '../css/01-gallery.css'
import '../css/common.css'
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox'


console.log(galleryItems);
const galleryOfImages = document.querySelector('.gallery');
const cardOfImage = onCreateGalleryItem(galleryItems);


galleryOfImages.insertAdjacentHTML('beforeend', cardOfImage);

function onCreateGalleryItem(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `<a class="gallery__item" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" />
                </a> `
    }).join('')
}
// Interface
new SimpleLightbox('.gallery a', {
   disableRightClick: true,
    scrollZoom: false,
    captionDelay: 250,
    captionsData: 'alt', 
});

