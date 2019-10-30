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

//select may not work here.
dropListElement.addEventListener('select', () => {
    let selectedItemValue = dropListElement.value;
    let filterArray = null;


//check reference code, you need a few more steps
    images.forEach(object => {
        if (selectedItemValue === object.keyword) {
            filterArray.push(object);
            const objectHTML = renderImage(object);
            const childElement = htmlToDOM(objectHTML);
            listElement.appendChild(childElement);
            
        }
    });
    
}); 


// In app.js, change the initial render to happen in a function that is called on page load with the full list of images. Start by clearing all the elements from the list.
// Reference the select drop-down and add an event listener
// In the event handler, filter the images (or use all images) and call the function to re-render the list.