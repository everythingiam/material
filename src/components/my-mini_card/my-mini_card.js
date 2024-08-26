import './my-mini-card.scss'
import cardHTML from './index.html'

function create(name, author, price, picture){
    const card = document.createElement('article')
    card.classList.add('product-card')
    card.id = 'post-123';
    card.innerHTML = cardHTML

    return card;
}

export default {
    create
}