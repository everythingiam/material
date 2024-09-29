import '../../styles/common.scss';

import myHeader from '../../modules/header/my-header';
import myPoster_create from '../../modules/poster_create/my-poster_create';
import myFooter from '../../modules/footer/my-footer';


const body = document.querySelector('body');
const main = document.createElement('main');

body.appendChild(myHeader.create())
body.appendChild(main);
main.appendChild(myPoster_create.create());
body.appendChild(myFooter.create());
