import '../../../styles/reset.scss';

import myHeader from '../../../modules/header/my-header';
import myPosterCard from '../../../modules/poster-card/my-poster-card';
import myFooter from '../../../modules/footer/my-footer';
import mySlider from '../../../modules/slider/my-slider';
import myH1_and_p from '../../../modules/h1_and_p/my-h1_and_p';
import './poster.scss';

const body = document.querySelector('body');
const main = document.createElement('main');

body.appendChild(myHeader.create());
body.appendChild(main);
main.appendChild(myPosterCard.create());
main.appendChild(myH1_and_p.create("Вам может понравиться"));
main.appendChild(mySlider.create());
body.appendChild(myFooter.create());
