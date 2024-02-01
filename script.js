let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgBox = document.querySelector("#msg");
let newGame = document.querySelector("#new-btn");
console.log(resetBtn);

let turnX = true;
let isEmpty = true;
let winningIndex = [
  [0, 4, 8],
  [2, 4, 6],
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];
let count = 0;
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnX) {
      box.innerText = "X";
      turnX = false;
      count++;
    } else {
      box.innerText = "O";
      turnX = true;
      count++;
    }
    box.disabled = true;
    checkWinner();
    if (count == 9 && checkWinner() != true) {
      msgBox.innerText = " Match Draw";
    }
  });
});

resetBtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    msgBox.innerText = "";
    box.disabled = false;
    count = 0;
  });
});

newGame.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    msgBox.innerText = "";
    box.disabled = false;
    count = 0;
  });
});

const disableButton = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const checkWinner = () => {
  for (let pattern of winningIndex) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        msgBox.innerText = "Winner is " + pos1;
        disableButton();
      }
    }
  }
};
