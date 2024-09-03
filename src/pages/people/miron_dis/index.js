import myPerson from '../../../modules/person/my-person';
import myPosterBar from '../../../modules/poster_bar/my-poster_bar';
import myMini_card from '../../../components/my-mini_card/my-mini_card';
import myHeader from '../../../modules/header/my-header'
import myFooter from '../../../modules/footer/my-footer'


const body = document.querySelector('body');

const posters = [
  myMini_card.create(),
  myMini_card.create(),
  myMini_card.create(),
];

const person = myPerson.create();
body.appendChild(myHeader.create())
body.appendChild(person);
body.appendChild(myPosterBar.create(posters));
body.appendChild(myFooter.create())