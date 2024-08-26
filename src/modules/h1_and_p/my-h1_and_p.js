import "./my-h1_and_p.scss";
import h1pHTML from './index.html';

function create(h1text, ptext){
    const component = document.createElement('section');
    component.classList.add('h1p');
    component.innerHTML = h1pHTML;

    setText(component, h1text, ptext);
    return component;
}

function setText(component, h1text, ptext){
    const h1_ = component.querySelector('h1');
    const p_ = component.querySelector('p');
    if (h1_ && h1text) h1_.textContent = h1text;
    if (p_ && ptext) p_.textContent = ptext; else p_.remove();
}

export default {
    create
};
