import './my-mini-card.scss'
import cardHTML from './index.html'

function create(name, author, price, picture){
    const card = document.createElement('article')
    card.classList.add('product-card')
    card.id = 'post-123';
    card.innerHTML = cardHTML

    turnOnAuthorLink(card);
    setLinks(name, author, price, picture);
    return card;
}

function turnOnAuthorLink(card){
    const author = card.querySelector('.author');
    author.addEventListener('click', (event) => {
        event.stopPropagation();
    })
}

function setLinks(name, author, price, picture){
    
}

export default {
    create
}