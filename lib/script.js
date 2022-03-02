'use strict';

const textToBeTyped = [
  "Hello there",
  "My name is Grigorii",
  "I am a beginner web developer from Saint-Petersburg",
  "You can view my study projects by following the links below",
  "https://shop.gsvetovidov.ru/",
  "https://news.gsvetovidov.ru/",
];

function playAnim(elem, textToBeTyped, textToBeTypedIndex = 0, isAdding = false, index = 0, symbols = []) {
  setTimeout(() => {
    if (!isAdding) {
      if (textToBeTypedIndex < textToBeTyped.length) {
        elem.classList.remove("showAnim");
        symbols = [...textToBeTyped[textToBeTypedIndex]];
        isAdding = true;
        index = 0;
      } else {
        return;
      }
    } else {
      if (index < symbols.length) {
        elem.innerText += symbols[index];
        index++;
      } else {
        isAdding = false;
        elem.classList.remove("typeText");
        if (textToBeTyped[textToBeTypedIndex].startsWith("http")) {
          createLink(elem, textToBeTyped[textToBeTypedIndex]);
        }
        elem = createParagraph();
        textToBeTypedIndex++;
      }
    }
    playAnim(elem, textToBeTyped, textToBeTypedIndex, isAdding, index, symbols);
  }, isAdding ? 120 : 2400)
}

function createParagraph() {
  let elem = document.createElement("p");
  document.body.append(elem);
  elem.classList.add("typeText", "showAnim");
  return elem;
}

function createLink(elem, text) {
  let link = document.createElement("a");
  link.setAttribute("href", text);
  link.classList.add("link");
  document.body.append(link);
  link.append(elem);
  return link;
}

playAnim(document.querySelector(".typeText"), textToBeTyped);
