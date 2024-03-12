//import { createIcons, Plus, Minus} from 'lucide';

// ICONS 
//createIcons({
//  icons: {
//    Plus,
//    Minus
//  }
//})

let leftSidePoint = 2;
let rightSidePoint = 9;

const leftSideElement = document.querySelector("#leftside");
const rightSideElement = document.querySelector("#rightside");
const resetElement = document.querySelector("#reset-btn");

const addLeft = document.querySelector("#add-left-btn");
const subLeft = document.querySelector("#sub-left-btn");
const addRight = document.querySelector("#add-right-btn");
const subRight = document.querySelector("#sub-right-btn");

addLeft?.addEventListener("click", () => {
  if (leftSideElement === null) throw new Error("elemento com id 'leftside' nao encontrado");
  leftSidePoint += 1;
  leftSideElement.innerHTML = String(leftSidePoint);
  console.log("add left");
});
subLeft?.addEventListener("click", () => {
  if (leftSideElement === null) throw new Error("elemento com id 'leftside' nao encontrado");
  if (leftSidePoint === 0) return;

  leftSidePoint -= 1;
  leftSideElement.innerHTML = String(leftSidePoint);
  console.log("sub left");
});
addRight?.addEventListener("click", () => {
  if (rightSideElement === null) throw new Error("elemento com id 'rightside' nao encontrado");
  rightSidePoint += 1;
  rightSideElement.innerHTML = String(rightSidePoint);
  console.log("add right");
});
subRight?.addEventListener("click", () => {
  if (rightSideElement === null) throw new Error("elemento com id 'rightside' nao encontrado");
  if (rightSidePoint === 0) return;
  rightSidePoint -= 1;
  rightSideElement.innerHTML = String(rightSidePoint);
  console.log("sub right");
});

resetElement?.addEventListener("click", () => {
  if (leftSideElement === null) throw new Error("elemento com id 'leftside' nao encontrado");
  if (rightSideElement === null) throw new Error("elemento com id 'rightside' nao encontrado");

  leftSidePoint = 0;
  rightSidePoint = 0;
  leftSideElement.innerHTML = String(leftSidePoint);
  rightSideElement.innerHTML = String(rightSidePoint);
})

if (leftSideElement === null) throw new Error("elemento com id 'leftside' nao encontrado");
if (rightSideElement === null) throw new Error("elemento com id 'rightside' nao encontrado");

leftSideElement.innerHTML = String(leftSidePoint);
rightSideElement.innerHTML = String(rightSidePoint);