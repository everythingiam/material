import "./my-header.scss";
import headerHTML from "./index.html";

function create() {
  const header = document.createElement("header");
  header.id = "header";
  header.innerHTML = headerHTML;



  return header;
}



export default {
  create,
};
