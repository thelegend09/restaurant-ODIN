import { cleanTab, addClass, addContainer, addText } from "./index.js"


export function activateTabOne() {
    cleanTab();
    addContainer(".main-text", "triangle")
    addClass(".triangle", "triangle-left");
    addClass(".tab-one", "active");
    
    addContainer(".main-text", "our-story-body");
    addText(
      "The Kitchen opened its doors in 2000. Owned and operated by Silver Lake residents our intention is to to reflect the diversity, color, and vibrancy of our neighborhood and to create a place people feel at home.",
      "",
      ".our-story-body",
      "p"
    );
    addText(
      "Everything is fresh and made from scratch. We make all our own stocks, dressings and sauces and we work hard to be consistent in our preparations. Our goal is to create fresh comfort food that is inspired. And while we maintain a stable core menu, we also like experimenting with new trends, exploring which ones work and which don’t, and coming up with new dishes to keep it fresh for you.",
      "",
      ".our-story-body",
      "p"
    );
    addText(
      "Most of the staff began working here over 10 years ago, some from the start. Whether it’s a sous-chef working in the kitchen since the beginning or a server with a developed and detailed knowledge of everything on our menu, our staff is an essential part of our operation and they know it. Our staff is happy and respected and we believe our product is a direct result of this, from the food to the general atmosphere.",
      "",
      ".our-story-body",
      "p"
    );
    addText(
      "We like what we do. We like serving delicious food in an unpretentious, relaxed atmosphere. We are friendly, but not intrusive, and always efficient! A satisfied customer represents our hard work, of which we are very proud. We get a lot of compliments for our food, and we like that and we work hard to keep those compliments coming.",
      "",
      ".our-story-body",
      "p"
    );
  }