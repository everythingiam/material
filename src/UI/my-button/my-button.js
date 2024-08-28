import './my-button.scss';

function create(text, mode, custom) {
    const btn = document.createElement('button');
    btn.classList.add('normal')

    setText(btn, text);
    setMode(btn, mode, custom);
    // setSize(btn, width, height);

    return btn;
}

function setText(btn, text) {
    btn.textContent = text;
}

// function setSize(btn, width, height) {
//     if (width) btn.style.width = width;
//     if (height) btn.style.height = height;
// }

function setMode(btn, mode, custom) {
    if (mode === 'outline') {
        btn.classList.add('button-outline');
    }
    if (custom) {
        btn.classList.add('custom')
    }
}

export default {
    create
};
