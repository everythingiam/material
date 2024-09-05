import "../../styles/common.scss";

import myHeader from "../../modules/header/my-header";
import myH1_and_p from "../../modules/h1_and_p/my-h1_and_p";
import myPoster_bar from "../../modules/poster_bar/my-poster_bar";
import myFooter from "../../modules/footer/my-footer";

import myMini_card from "../../components/my-mini_card/my-mini_card";
import myButton from "../../UI/my-button/my-button";
// import myButton from "../../UI/my-button/my-button";



const body = document.querySelector('body');

body.appendChild(myHeader.create())
body.appendChild(myH1_and_p.create('Изменение профиля', 'Добавляемая вами информация видна всем, кто может просматривать ваш профиль.'))
body.appendChild(myFooter.create())


