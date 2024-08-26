import './my-poster_bar.scss';
import myMini_card from '../../components/my-mini_card/my-mini_card';

function create(posters_array){
    var bar = document.createElement('section')
    bar.classList.add('poster-bar')
    setPosters(bar, posters_array)

    return bar;
}

function setPosters(bar, posters_array){
    posters_array.forEach(elem => {
        bar.appendChild(elem);
    });
}

export default {
    create
}