import cardHTML from './index.html';
import './my-poster-card.scss';
import myButton from '../../UI/my-button/my-button';
import VanillaTilt from 'vanilla-tilt';

function create() {
  const card = document.createElement('article');
  card.classList.add('poster-card');
  card.innerHTML = cardHTML;

  const sizesCont = card.querySelector('.sizes');
  const sizeButtons = sizesCont.querySelectorAll('button');
  sizeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      sizeButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });

  addTilt(card);
  return card;
}

function addTilt(card) {
  VanillaTilt.init(card.querySelector('.card-container'), {
    max: 8,
    reverse: true,
  });
}
export default {
  create,
};
