import "./my-dialog_popup.scss";
import loginHTML from "./login.html";
import registerHTML from "./register.html";
import forgotHTML from "./forgot.html";

import myForm from "../../UI/my-form/my-form";
import myButton from "../../UI/my-button/my-button";

import "./validation.js";

const contentMap = new Map([
  ['login', loginHTML],
  ['register', registerHTML],
  ['forgot', forgotHTML]
]);

function create() {
  const popupSystem = document.createElement("dialog");
  document.body.appendChild(popupSystem);

  contentMap.forEach((content, type) => {
    const newWindow = document.createElement('div');
    newWindow.innerHTML = content;
    newWindow.classList.add('dialog-popup', type);
    popupSystem.appendChild(newWindow);
  });

  addCloseLogic(popupSystem);
  setLinks(popupSystem);

  return popupSystem;
}

function addCloseLogic(popupSystem) {
  popupSystem.addEventListener("click", (event) => {
    if (!event.target.closest('.dialog-popup.active')) {
      closeAll(popupSystem);
    }
  });

  popupSystem.querySelectorAll(".dialog-popup").forEach(dialog => {
    dialog.addEventListener("click", (event) => event.stopPropagation());
  });
}

function setButtonAsOpener(popupSystem, type, button) {
  if (button) {
    button.addEventListener("click", () => openPopup(popupSystem, type));
  } else {
    console.error(`Button for type ${type} not found`);
  }
}

function setLinks(popupSystem) {
  ['register', 'login', 'forgot'].forEach(type => {
    popupSystem.querySelectorAll(`.${type}Link`).forEach(link => {
      setLinkAsOpener(popupSystem, type, link);
    });
  });
}

function setLinkAsOpener(popupSystem, type, link) {
  if (link) {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      closeAll(popupSystem);
      openPopup(popupSystem, type);
    });
  } else {
    console.error(`Link for type ${type} not found`);
  }
}

function openPopup(popupSystem, type) {
  popupSystem.classList.add('pop-active');
  document.body.classList.add("no-scroll");
  popupSystem.querySelector(`.${type}`).classList.add('active');
}

function closeAll(popupSystem) {
  popupSystem.classList.remove('pop-active');
  document.body.classList.remove("no-scroll");
  popupSystem.querySelectorAll('.dialog-popup.active').forEach(dialog => {
    dialog.classList.remove('active');
  });
}

export default {
  create,
  setButtonAsOpener,
};