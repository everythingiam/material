import "./styles/common.scss";

import myHeader from "./modules/header/my-header";
import myH1_and_p from "./modules/h1_and_p/my-h1_and_p";
import myPoster_bar from "./modules/poster_bar/my-poster_bar";
import myGallery from "./modules/gallery/my-gallery";
import myNews_sign from "./modules/news_sign/my-news_sign";
import myFooter from "./modules/footer/my-footer";
import myDropdown from "./UI/my-dropdown/my-dropdown";
import myLogin_popup from "./modules/login_popup/my-login_popup";

import myButton from "./UI/my-button/my-button";
import myMini_card from "./components/my-mini_card/my-mini_card";
import GalleryImage1 from "./assets/img/gallery1.png";
import GalleryImage2 from "./assets/img/gallery2.png";

const posters = [
  myMini_card.create(),
  myMini_card.create(),
  myMini_card.create(),
];

const dropdown_array = ["по рекомендациям", "по возрастанию цены", "по убыванию цены"]

var btn2 = myButton.create("Посмотреть всё", "outline", "custom");
var btn3 = myButton.create("Перейти в профиль", "normal", "custom");

btn2.style = "margin-bottom: 2.2rem; margin-top: 4rem; align-self: center; max-width: 32.5rem";
btn3.style = "margin-bottom: 6.1rem; align-self: center; max-width: 32.5rem";

const login_popup = myLogin_popup.create('login');


const body = document.querySelector("body");

body.appendChild(myHeader.create());
body.appendChild(myH1_and_p.create("Выбор клиентов"));
body.appendChild(myDropdown.create(dropdown_array));
body.appendChild(myPoster_bar.create(posters));
body.appendChild(btn2);
body.appendChild(
  myH1_and_p.create(
    "Качество и надёжная доставка",
    "Постеры печатаются на качественной матовой бумаге, которая обеспечивает яркие цвета. А перевозка в экологичном картонном тубусе не позволит товару повредиться."
  )
);
body.appendChild(myGallery.create(GalleryImage1, GalleryImage2));
body.appendChild(
  myH1_and_p.create(
    "Удобный постинг",
    "Если вы дизайнер и хотите продавать свои работы, вы можете добавлять в свой профиль постеры, и пользователи смогут увидеть его в каталоге."
  )
);
body.appendChild(btn3);
body.appendChild(myNews_sign.create());
body.appendChild(myFooter.create());
body.appendChild(login_popup)


const loginBtn = header.querySelector('.normal');

myLogin_popup.setButtonAsOpener(login_popup, loginBtn);

