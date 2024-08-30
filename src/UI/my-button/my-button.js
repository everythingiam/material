import "./my-button.scss";

//UI-компонент "Кнопка"

//в принципе этим можно не пользоваться
function createButton(text, mode, isCustom) { 
  const btn = document.createElement("button");
  btn.classList.add("button");

  setText(btn, text);
  setMode(btn, mode, isCustom);

  return btn;
}

function createA(text, mode, isCustom, link){
  const a = document.createElement('a');
  a.classList.add('button')

  setText(a, text);
  setMode(a, mode, isCustom);
  setLink(a, link);

  return a;
}

function setText(btn, text) {
  btn.textContent = text;
}

function setMode(btn, mode, custom) {
  btn.classList.add(mode);
  
  if (custom) {
    btn.classList.add("custom");
  }
}

function setLink(a, link){
  a.href = link;
}

export default {
  createButton,
  createA
};
