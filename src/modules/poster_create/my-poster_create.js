import createHTML from './index.html';
import myPosterFrame from '../../components/my-poster-frame/my-poster-frame';
import './my-poster_create.scss';
import Image from '../../assets/img/dobavit.svg'

function create() {
  const create = document.createElement('article');
  create.classList.add('poster-create');
  create.innerHTML = createHTML;

  const frame = myPosterFrame.create(Image);

  create.insertBefore(frame, create.querySelector('.right'))

  return create;
}

export default {
  create,
};