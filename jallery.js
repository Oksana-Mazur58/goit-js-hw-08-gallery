import pictures from './jallery-items.js';
import createGalleryCard from './createGallery.js';
// const pictures= 

const galleryContainer = document.querySelector('.gallery');
const picturesOfGallery = createGalleryCard(pictures);
galleryContainer.insertAdjacentHTML('beforeend', picturesOfGallery);



// url большого изображения
const modalImg = document.querySelector('.lightbox__image');

function getImgAttributes (src, ult) {
    modalImg.src = src;
    modalImg.alt = alt;
}

// Открытие модального окна по клику на элементе галереи.
const lightboxModal = document.querySelector(".js-lightbox")
galleryContainer.addEventListener('click', onOpenModal)
function onOpenModal(event) {
  event.preventDefault();

  if (!event.target.classList.contains('gallery__image')) {
  return
}

    lightboxModal.classList.add('is-open');
    window.addEventListener('keydown', onEscKeyPress);

    getImgAttributes(event.target.dataset.source,event.target.alt)
 
}

//Закриття модального вікна
const buttonModalClose = document.querySelector('[data-action="close-lightbox"]');
buttonModalClose.addEventListener('click', onModalClose)

function onModalClose() {
  lightboxModal.classList.remove('is-open');
    window.removeEventListener('keydown', onEscKeyPress);
getImgAttributes('','')

}
function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    onModalClose();
  }
}

const modalOverlay = document.querySelector('.lightbox__overlay')
modalOverlay.addEventListener('click', OnOverlayClick);
function OnOverlayClick(event) {
  if (event.target === event.currentTarget) {
    onModalClose()
  }
}
