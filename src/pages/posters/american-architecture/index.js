import myHeader from "../../../modules/header/my-header";
import myPosterCard from "../../../modules/poster-card/my-poster-card";
import myFooter from "../../../modules/footer/my-footer";

const body = document.querySelector('body')

body.appendChild(myHeader.create())
body.appendChild(myPosterCard.create())
body.appendChild(myFooter.create())