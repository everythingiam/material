import "./my-gallery.scss";
import galleryHTML from "./index.html";

function create(img1, img2) {
  const gallery = document.createElement("section");
  gallery.classList.add("gallery");
  gallery.innerHTML = galleryHTML;

  setImage(gallery, img1, img2);
  return gallery;
}

function setImage(gallery, img1, img2) {
  const imgHTML1 = gallery.querySelector(".one");
  const imgHTML2 = gallery.querySelector(".two");

  if (img1) imgHTML1.src = img1;
  if (img2) imgHTML2.src = img2;
}

export default {
  create,
};
