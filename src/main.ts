import { createIcons, Plus, Minus, RotateCcw, Eye} from 'lucide';

// ICONS 
createIcons({
  icons: {
    Plus,
    Minus,
    RotateCcw,
    Eye
  }
})

let leftSidePoint = 0;
let rightSidePoint = 0;

const leftSideElement = document.getElementById("leftside");
const rightSideElement = document.getElementById("rightside");

if (leftSideElement === null) throw new Error("elemento com id 'leftside' nao encontrado");
if (rightSideElement === null) throw new Error("elemento com id 'rightside' nao encontrado");

leftSideElement.innerHTML = String(leftSidePoint);
rightSideElement.innerHTML = String(rightSidePoint);


const actionBtn = document.querySelectorAll(".action-btn");

actionBtn.forEach(button => {
  button.addEventListener("click", (event) => {

    switch ((event.currentTarget as HTMLButtonElement).id) {
      case "add-left-btn":
        if (leftSideElement === null) throw new Error("elemento com id 'leftside' nao encontrado");
        leftSidePoint += 1;
        leftSideElement.innerHTML = String(leftSidePoint);
        break;
      
      case "sub-left-btn":
        if (leftSideElement === null) throw new Error("elemento com id 'leftside' nao encontrado");
        if (leftSidePoint === 0) return;

        leftSidePoint -= 1;
        leftSideElement.innerHTML = String(leftSidePoint);
        break;
      
      case "add-right-btn":
        if (rightSideElement === null) throw new Error("elemento com id 'rightside' nao encontrado");
        rightSidePoint += 1;
        rightSideElement.innerHTML = String(rightSidePoint);
        break;
      
      case "sub-right-btn":
        if (rightSideElement === null) throw new Error("elemento com id 'rightside' nao encontrado");
        if (rightSidePoint === 0) return;
        rightSidePoint -= 1;
        rightSideElement.innerHTML = String(rightSidePoint);
        break;
      
      case "reset-btn":
        if (leftSideElement === null) throw new Error("elemento com id 'leftside' nao encontrado");
        if (rightSideElement === null) throw new Error("elemento com id 'rightside' nao encontrado");

        leftSidePoint = 0;
        rightSidePoint = 0;
        leftSideElement.innerHTML = String(leftSidePoint);
        rightSideElement.innerHTML = String(rightSidePoint);
        break;
    
      default:
        console.log("somethin went wrong");
        break;
    }

    button.addEventListener("touchstart", (event) => {
      (event.currentTarget as HTMLButtonElement).style.transform = "scale(0.80)";
    })
    button.addEventListener("touchend", (event) => {
      (event.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
    })
    
    
  });
});