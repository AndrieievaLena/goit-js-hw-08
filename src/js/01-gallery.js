// Add imports above this line
import '../css/01-gallery.css'
import '../css/common.css'
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
// Change code below this line

console.log(galleryItems);
const galleryOfImages = document.querySelector('.gallery');
const cardsImages = onCreateGalleryItem(galleryItems);

galleryOfImages.insertAdjacentElement('beforeend', cardsImages);

function onCreateGalleryItem(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class= "gallery__item" href = '${original}'>
        <img class = "gallery__image" scr = '${preview}' alt = '${description}'>
        </a>
        `

    }).join('')
}
new SimpleLightbox('.gallery a', {
   disableRightClick: true,
    scrollZoom: false,
    captionDelay: 250,
    captionsData: 'alt', 
});

