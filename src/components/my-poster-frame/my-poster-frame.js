import VanillaTilt from 'vanilla-tilt';
import posterHTML from './index.html';
import srcsetGenerator from '../../helpers/srcsetGenerator';
import Image from '../../assets/img/image 65.png';
import './my-poster-frame.scss';

function create(poster_img) {
  const frame = document.createElement('aside')
  frame.classList.add('poster-left');
  frame.innerHTML = posterHTML;

  if (!poster_img){
    poster_img = Image;
  }
  const picture = srcsetGenerator.generate(poster_img);
  const cardCont = frame.querySelector('.card-container');
  cardCont.appendChild(picture);

  addTilt(frame.querySelector('.tilt-container'));
  return frame;
}

function addTilt(card) {
  VanillaTilt.init(card, {
    max: 7,
    reverse: true,
    // "mouse-event-element": "body",
    // speed: 400,
  });
}

export default {
  create,
};
