import './my-news_sign.scss';
import myMailForm from '../../components/my-mail-form/my-mail-form';


function create(){
    const mail = document.createElement('section');
    mail.appendChild(myMailForm.create())
    mail.classList.add('mail')
    // mail.innerHTML = newsHTML;
    return mail;
}

export default {
    create
}
