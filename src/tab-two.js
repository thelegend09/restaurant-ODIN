import oatmealPic from '../src/oatmeal.jpg';
import knishPic from "../src/knish.jpeg";
import matzoPic from "../src/matzo.jpg";
import omelettePic from "../src/omelet.jpg";
import pancakePic from "../src/pancake.jpg";
import sandwichPic from "../src/sandwich.jpg";


import {
  cleanTab,
  addClass,
  addContainer,
  addText,
  addPicture
} from "./index.js"



export function activateTabTwo() {
  cleanTab()
  console.log("tab two activated")

  addContainer(".main-text", "triangle triangle-center")
  addClass(".tab-two", "active");
  addContainer(".main-text", "menu")
  addMenuItems()
}


function addMenuItems() {

  // for each menu item
  Object.keys(menu).forEach(item => {
    // create the container for one menu item
    let counter = 0;
    addContainer(".menu", `dish ${item}`)

    // image doesn't work??
    addPicture(menu[item]["imgSrc"], "", `.${item}`)


    // name
    addText(menu[item]["name"], "name", `.${item}`)

    // description
    addText(menu[item]["description"], "description", `.${item}`)

    // price
    addText(menu[item]["price"], "price", `.${item}`)

    // 
  });

}


let menu = {
  eggSandwich: {
    name: "Egg Sandwhich",
    description: "1 or 2 eggs on our own challah bread, options to add cheese, choose bread",
    price: "2.50",
    imgSrc: sandwichPic
  },
  oatmeal: {
    name: "Oatmeal",
    description: "All day breakfast special: Served with orange juice, coffee or Lipton tea.",
    price: "4.50",
    imgSrc: oatmealPic
  },
  greekOmelet: {
    name: "Greek Omelet",
    description: "Feta, spinach and tomato.",
    price: "8.50",
    imgSrc: omelettePic
  },
  buttermilkPancakes: {
    name: "Buttermilk Pancakes",
    description: "Our unforgettables pancakes",
    price: "8.50",
    imgSrc: pancakePic
  },
  matzo: {
    name: "Matzo Brei",
    description: "Served with apple sauce or sour cream or both.",
    price: "7.75",
    imgSrc: matzoPic
  },
  knish: {
    name: "Knish with Gravy",
    description: "Potato, kasha, sweet potato, mushroom, broccoli, mixed vegetable or       spinach.",
    price: "4.00",
    imgSrc: knishPic
  }
}