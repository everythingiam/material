import cardHTML from './index.html';
import myPosterFrame from '../../components/my-poster-frame/my-poster-frame';
import './my-poster-card.scss';

function create() {
  const card = document.createElement('article');
  card.classList.add('poster-card');
  card.innerHTML = cardHTML;

  const frame = myPosterFrame.create();

  card.insertBefore(frame, card.querySelector('.right'))

  const sizesCont = card.querySelector('.sizes');
  const sizeButtons = sizesCont.querySelectorAll('button');
  sizeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      sizeButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });

  return card;
}

export default {
  create,
};
