import renderImage from './src/render-image.js';
import htmlToDOM from './src/html-to-dom.js';
import images from './data/images.js';

const listElement = document.getElementById('animal-list');


images.forEach(object => {
    const objectHTML = renderImage(object);
    const childElement = htmlToDOM(objectHTML);
    listElement.appendChild(childElement);
});