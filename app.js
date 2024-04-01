let inputVal = document.querySelector(".addEl input");
let addBtn = document.querySelector(".addEl button");
let elements = document.querySelector(".elements");
let alert = document.querySelector("#alert");
let arr = [];

function addElements() {
  let value = inputVal.value;
  if (value.length == 0) {
    alert.textContent = "Please fill the input area!";
  } else {
    arr.push(value);
    renderElements();
    inputVal.value = "";
    alert.textContent = "";
  }
}

function addElementsKey(e) {
  if (e.key === "Enter") {
    let value = inputVal.value;
    if (value.length == 0) {
      alert.textContent = "Please fill the input area!";
    } else {
      arr.push(value);
      renderElements();
      inputVal.value = "";
      alert.textContent = "";
    }
  }
}

function renderElements() {
  elements.innerHTML = "";
  arr.forEach((item) => {
    elements.innerHTML += ` <div class="element">
            <p>${item}</p>
            <button class="removeBtn"><i class="fa-solid fa-trash"></i></button>
            <button class="editBtn"><i class="fa-solid fa-pen-to-square"></i></button>
          </div>`;
  });
  attachRemoveListener();
  editElementListener();
}

function attachRemoveListener() {
  let removeBtns = document.querySelectorAll(".removeBtn");
  removeBtns.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      arr.splice(index, 1);
      renderElements();
    });
  });
}

function editElementListener() {
  let editBtns = document.querySelectorAll(".editBtn");
  editBtns.forEach((edit, index) => {
    edit.addEventListener("click", function () {
      let pElement = edit.parentNode.querySelector("p");
      pElement.contentEditable = true;
      pElement.focus();
      pElement.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          pElement.contentEditable = false;
          arr[index] = pElement.textContent;
          renderElements();
        }
      });
    });
  });
}

addBtn.addEventListener("click", addElements);
inputVal.addEventListener("keydown", addElementsKey);
