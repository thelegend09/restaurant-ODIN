import Logo from './logo.png';

import {
  activateTabOne
} from "./tab-one.js";

import {
  activateTabTwo
} from "./tab-two.js";

import {
  activateTabThree
} from "./tab-three.js";

(function initialize() {
  addPicture(Logo, "logo", "#content")
  addContainer("#content", "headers");
  addText("Our Story", "tab-one", ".headers", "h1");
  addText("Menu", "tab-two", ".headers", "h1");
  addText("Hours", "tab-three", ".headers", "h1");
  addContainer("#content", "main-text");
  headerButtons();
  activateTabOne();
})();

export function cleanTab() {
  let container = document.querySelector(".main-text");
  container.replaceChildren();

  let headers = document.querySelectorAll("h1")

  headers.forEach(header => {
    if (header.classList.contains("active")) {
      header.classList.remove("active")
    }
  })
}

export function addClass(element, className) {
  let myElement = document.querySelector(element);

  if (!className.includes(" ")) {
    myElement.classList.add(className);
  }

  // if "className" DOES have a space, there are several classes to add
  else if (className.includes(" ")) {
    let severalClasses = className.split(" ");
    for (let i = 0; i < severalClasses.length; i++) {
      myElement.classList.add(severalClasses[i])
    };
  }

}

export function removeClass(element, classes) {
  let myElement = document.querySelector(element);
  myElement.classList.remove(classes);
}

export function addText(content, className, parentName, type = "div") {
  let text = document.createElement(type);
  text.textContent = content;

  if (className !== "") {
    text.classList.add(className);
  }


  let parent = document.querySelector(parentName);
  parent.appendChild(text);
}

export function addContainer(parentName, className, type = "div") {
  let newContainer = document.createElement(type);
  let parent = document.querySelector(parentName);

  if (className != "") {
    // if "className" doesn't have space, there’s only one class to add
    if (!className.includes(" ")) {
      newContainer.classList.add(className);
    }

    // if "className" DOES have a space, there are several classes to add
    else if (className.includes(" ")) {
      let severalClasses = className.split(" ");
      for (let i = 0; i < severalClasses.length; i++) {
        newContainer.classList.add(severalClasses[i])
      };
    }
  }


  parent.appendChild(newContainer);
}
export function addPicture(src, className, parentName) {
  let newImage = new Image();
  newImage.src = src;
  if (className !== "") {
    newImage.classList.add(className);
  }
  let parent = document.querySelector(parentName);

  parent.appendChild(newImage);
}

// set up event listeners
function headerButtons() {
  let headers = document.querySelectorAll(".headers > h1");

  headers.forEach((header) => {
    header.addEventListener("click", () => {
      if (header.textContent === "Our Story") {
        activateTabOne();
      } else if (header.textContent === "Menu") {
        activateTabTwo();
      } else if (header.textContent === "Hours") {
        activateTabThree();
      }
    });
  });
}