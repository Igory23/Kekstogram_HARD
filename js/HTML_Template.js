import { createPhotoDiscription } from './setup.js';

const photoTemplateContent = document.getElementById('picture').content,
    pictures = document.querySelector('.pictures'),
    createPhotos = createPhotoDiscription(),
    documentFragment = document.createDocumentFragment();

createPhotos.forEach(({ url, likes, comments }) => {

    const photoElement = photoTemplateContent.cloneNode(true);

    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__comments').textContent = comments.length;
    photoElement.querySelector('.picture__likes').textContent = likes;

    documentFragment.appendChild(photoElement)
});

pictures.appendChild(documentFragment);