import "./my-dropdown.scss";
import dropdownHTML from "./index.html";

function create(items_array) {
  const dropdown = document.createElement("aside");
  dropdown.innerHTML = dropdownHTML;
  dropdown.classList.add("dropdown");

  addItems(dropdown, items_array);
  addCloseAndOpenLogic(dropdown);

  return dropdown;
}

function addCloseAndOpenLogic(dropdown) {
  const dropButton = dropdown.querySelector("button");
  const ula = dropdown.querySelector("ul");

  dropButton.addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("safasf");

    ula.style.display = "block";
  });

  document.addEventListener("click", function () {
    ula.style.display = "none";
  });
}

function addItems(dropdown, items) {
  const dropdownLabel = dropdown.querySelector(".dropdown-label");
  const dropdownList = dropdown.querySelector("ul");

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;

    li.addEventListener("click", () => {
      dropdownLabel.textContent = item;
    });

    dropdownList.appendChild(li);
  });
}

export default {
  create,
};
