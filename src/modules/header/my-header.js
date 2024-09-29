import './my-header.scss';
import headerHTML from './index.html';
import myDialog_popup from '../dialog_popup/my-dialog_popup';

function create() {
  const header = document.createElement('header');
  header.id = 'header';
  header.innerHTML = headerHTML;

  const dialogs = myDialog_popup.create();

  const loginBtn = header.querySelector('.loginBtn');
  const registerBtn = header.querySelector('.registerBtn');
  const sidebarLoginBtn = header.querySelector('.sidebarLoginBtn');
  const sidebarRegisterBtn = header.querySelector('.sidebarRegisterBtn');
  // const forgotBtn = header.querySelector('.forgotBtn');

  myDialog_popup.setButtonAsOpener(dialogs, 'login', loginBtn);
  myDialog_popup.setButtonAsOpener(dialogs, 'register', registerBtn);
  myDialog_popup.setButtonAsOpener(dialogs, 'login', sidebarLoginBtn);
  myDialog_popup.setButtonAsOpener(dialogs, 'register', sidebarRegisterBtn);
  // myDialog_popup.setAsOpener(dialogs, 'forgot', forgotBtn);

  addSideBar(header);

  return header;
}

function addSideBar(header) {
  const icon = header.querySelector('.menu-button');
  const sidebar = header.querySelector('.sidebar');

  icon.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    icon.classList.toggle('active');
  });

  document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && !icon.contains(event.target)) {
      sidebar.style.display = 'none';
      document.body.classList.remove('no-scroll');
    }
  });
}

export default {
  create,
};
