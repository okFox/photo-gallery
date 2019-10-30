import renderImage from './src/render-image.js';
import htmlToDOM from './src/html-to-dom.js';
import images from './data/images.js';
import renderDropList from './src/render-drop-list.js';

const listElement = document.getElementById('animal-list');
const dropListElement = document.getElementById('drop-list');

images.forEach(object => {
    const objectHTML = renderImage(object);
    const childElement = htmlToDOM(objectHTML);
    listElement.appendChild(childElement);
});

images.forEach(object => {
    const objectHTML = renderDropList(object);
    const childElement = htmlToDOM(objectHTML);
    dropListElement.appendChild(childElement);
});


