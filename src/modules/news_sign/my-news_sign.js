import './my-news_sign.scss';
import mailHTML from './index.html'

function create(){
    const mail = document.createElement('section');
    mail.innerHTML = mailHTML;
    const img = document.createElement('img');
    mail.classList.add('mail')
    // mail.innerHTML = newsHTML;
    return mail;
}

export default {
    create
}
