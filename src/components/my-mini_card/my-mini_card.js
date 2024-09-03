import './my-mini-card.scss'
import cardHTML from './index.html'

function create(name, author, price, picture){
    const card = document.createElement('article')
    card.classList.add('product-card')
    card.id = 'post-123';
    card.innerHTML = cardHTML

    turnOnFavButton(card);
    setLinks(name, author, price, picture);
    return card;
}

function turnOnFavButton(card){
    const fav = card.querySelector('.favorite-btn');
    fav.addEventListener('click', (event) => {
        event.preventDefault();
        fav.classList.toggle('fav-active');
    })
}


function setLinks(name, author, price, picture){
    
}

export default {
    create
}