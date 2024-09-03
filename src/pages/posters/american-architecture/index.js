import myHeader from '../../../modules/header/my-header';
import myPosterCard from '../../../modules/poster-card/my-poster-card';
import myFooter from '../../../modules/footer/my-footer';
import mySlider from '../../../modules/slider/my-slider';
import myH1_and_p from '../../../modules/h1_and_p/my-h1_and_p';
import './poster.scss';

const body = document.querySelector('body');
const separator = document.createElement('div');
separator.classList.add("separator");

body.appendChild(myHeader.create());
body.appendChild(myPosterCard.create());
body.appendChild(myH1_and_p.create("Вам может понравиться"));
body.appendChild(mySlider.create());
body.appendChild(separator);
body.appendChild(myFooter.create());
