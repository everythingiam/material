import createHTML from './index.html';
import myPosterFrame from '../../components/my-poster-frame/my-poster-frame';
import './my-poster_create.scss';
import Image from '../../assets/img/dobavit.svg';

function create() {
  const create = document.createElement('section');
  create.classList.add('poster-create');
  create.innerHTML = createHTML;

  const frame = myPosterFrame.create(Image);
  const left = create.querySelector('.left');

  left.insertBefore(frame, create.querySelector('.spans'));

  const img = left.querySelector('img');
  img.classList.add('empty');
  return create;
}

export default {
  create,
};
