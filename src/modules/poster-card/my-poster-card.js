import cardHTML from "./index.html";
import "./my-poster-card.scss";
import myButton from "../../UI/my-button/my-button";

function create() {
  const card = document.createElement("article");
  card.classList.add("poster-card");
  card.innerHTML = cardHTML;

  const sizesCont = card.querySelector(".sizes");
    const sizeButtons = sizesCont.querySelectorAll('button');
    sizeButtons.forEach(button => {
        button.addEventListener('click', () =>{
            sizeButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active'); 
        })
    })

  return card;
}

export default {
  create,
};
