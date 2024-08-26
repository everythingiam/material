import "./my-mail-form.scss";
import mailHTML from './index.html';
import myForm from '../../UI/my-form/my-form';

function create(){
    const mailForm = document.createElement('article')
    mailForm.classList.add('mail-form');
    mailForm.innerHTML = mailHTML;

    return mailForm;
}

export default{
    create
}