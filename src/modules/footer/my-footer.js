import "./my-footer.scss";
import footerHTML from './index.html';

function create() {
  const footer = document.createElement('footer');
  footer.id = 'footer';
  footer.innerHTML = footerHTML;
  return footer;
}

export default {
  create,
};
