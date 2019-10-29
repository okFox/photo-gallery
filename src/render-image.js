


export default function renderImage(card) {
    const markup = `    <li class='card'>
        <div class='animal-image'><img src="${card.url}" alt="${card.title}" title="${card.description}"></div>
        <div class='animal-title'>${card.title}</div>
        <div class='horns'>${card.horns} Horn(s)</div>
        <div class='animal-description'><p>${card.description}</p></div>
    </li>`;
    return markup;

}   