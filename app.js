import renderImage from './src/render-image.js';
import htmlToDOM from './src/html-to-dom.js';
import images from './data/images.js';
import renderDropList from './src/render-drop-list.js';

const cards = document.querySelector('.animal-cards');
const dropListElement = document.querySelector('.drop-list');

//renders animal cards
images.forEach(object => {
    const objectHTML = renderImage(object);
    const childElement = htmlToDOM(objectHTML);

    cards.appendChild(childElement);

});

//renders dropdown list items
images.forEach(object => {
    const objectHTML = renderDropList(object);
    const childElement = htmlToDOM(objectHTML);
    dropListElement.appendChild(childElement);
});


// dropListElement.addEventListener('change', () => {
//     let selectedItemValue = dropListElement.value;
//     let filterArray = null;

//     if (!selectedItemValue) {
//         filterArray = images;
//     } else {
//         filterArray = images.filter(image => {
//             if (image.type === filterArray) {
//                 return true;
//             } else {
//                 return false;
//             }
//         });
//     }
//     console.log(filterArray);

// });

// //check reference code, you need a few more steps
// images.forEach(object => {
//     if (selectedItemValue === object.keyword) {
//         filterArray.push(object);
//         const objectHTML = renderImage(object);
//         const childElement = htmlToDOM(objectHTML);
//         listElement.appendChild(childElement);

//     }
// });

//});


// In app.js, change the initial render to happen in a function that is called on page load with the full list of images. Start by clearing all the elements from the list.
// Reference the select drop-down and add an event listener
// In the event handler, filter the images (or use all images) and call the function to re-render the list.