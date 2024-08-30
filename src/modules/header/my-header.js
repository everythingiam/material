import "./my-header.scss";
import headerHTML from "./index.html";
import myDialog_popup from "../dialog_popup/my-dialog_popup";

function create() {
  const header = document.createElement("header");
  header.id = "header";
  header.innerHTML = headerHTML;

  const dialogs = myDialog_popup.create();

  const loginBtn = header.querySelector('.loginBtn');
  const registerBtn = header.querySelector('.registerBtn');
  // const forgotBtn = header.querySelector('.forgotBtn');

  myDialog_popup.setAsOpener(dialogs, 'login', loginBtn);
  myDialog_popup.setAsOpener(dialogs, 'register', registerBtn);
  // myDialog_popup.setAsOpener(dialogs, 'forgot', forgotBtn);

  return header;
}

export default {
  create,
};
