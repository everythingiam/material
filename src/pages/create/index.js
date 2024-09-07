import '../../styles/common.scss';

import myHeader from '../../modules/header/my-header';
import myPoster_create from '../../modules/poster_create/my-poster_create';
import myFooter from '../../modules/footer/my-footer';


const body = document.querySelector('body');

body.appendChild(myHeader.create());
body.appendChild(myPoster_create.create());
body.appendChild(myFooter.create());
