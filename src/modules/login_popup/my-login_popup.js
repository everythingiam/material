import "./my-login_popup.scss";
import loginHTML from "./index.html";
import myForm from "../../UI/my-form/my-form";
import myButton from "../../UI/my-button/my-button";

function create() {
  const popupWhole = document.createElement("aside");
  popupWhole.classList.add("popupWhole");
  popupWhole.innerHTML = loginHTML;

  addCloseLogic(popupWhole);
  return popupWhole;
}

function addCloseLogic(popupWhole) {
  popupWhole.addEventListener("click", () => {
    popupWhole.style.display = "none";
    document.body.classList.remove("no-scroll");
  });
  const dialog = popupWhole.querySelector(".dialog-popup");

  dialog.addEventListener("click", (event) => {
    event.stopPropagation();
  });
}

function setButtonAsOpener(popupWhole, button) {
  button.addEventListener("click", () => {
    popupWhole.style.display = "block";
    document.body.classList.add("no-scroll");
  });
}

export default {
  create,
  setButtonAsOpener,
};
