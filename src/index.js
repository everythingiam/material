import "./styles/common.scss";

import myHeader from "./modules/header/my-header";
import myH1_and_p from "./modules/h1_and_p/my-h1_and_p";
import myGallery from "./modules/gallery/my-gallery";
import myNews_sign from "./modules/news_sign/my-news_sign";
import myFooter from "./modules/footer/my-footer";
import mySlider from "./modules/slider/my-slider";
import myDialog_popup from "./modules/dialog_popup/my-dialog_popup";

import myButton from "./UI/my-button/my-button";
import GalleryImage1 from "./assets/img/gallery1.png";
import GalleryImage2 from "./assets/img/gallery2.png";


const btn2 = myButton.createA("Посмотреть всё", "outline", "custom", '#');
btn2.href = "/material/catalog/index.html"
const btn3 = myButton.createA("Перейти в профиль", "normal", "custom", '#');

btn2.style = "margin-bottom: 2.2rem; margin-top: 4rem; align-self: center; max-width: 32.5rem";
btn3.style = "margin-bottom: 6.1rem; margin-top: 0rem; align-self: center; max-width: 32.5rem";

document.addEventListener("DOMContentLoaded", () => {
  myDialog_popup.setButtonAsOpener(document.querySelector('dialog'), 'login', btn3);
});

const body = document.querySelector("body");

body.appendChild(myHeader.create());
body.appendChild(myH1_and_p.create("Выбор клиентов"));
body.appendChild(mySlider.create());
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