import '../../styles/reset.scss';
import '../../styles/common.scss';

import myHeader from '../../modules/header/my-header';
import myH1_and_p from '../../modules/h1_and_p/my-h1_and_p';
import myPoster_bar from '../../modules/poster_bar/my-poster_bar';
import myFooter from '../../modules/footer/my-footer';

import fakePosters from '../../helpers/fakePosters';
import myMini_card from '../../components/my-mini_card/my-mini_card';
import myButton from '../../UI/my-button/my-button';
// import myButton from "../../UI/my-button/my-button";

const posters = fakePosters.map((poster) => myMini_card.create(poster));

const body = document.querySelector('body');
const main = document.createElement('main');

body.appendChild(myHeader.create());
body.appendChild(main);
main.appendChild(myH1_and_p.create('Корзина'));
main.appendChild(myPoster_bar.create(posters));
body.appendChild(myFooter.create());
