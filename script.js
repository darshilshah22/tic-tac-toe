const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#reset-btn");
const msgContainer = document.querySelector(".msg-container");

let turnO = true;
let count = 0;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    count++;
    box.disabled = true;
    let isWinner = checkWinner();

    if (count == 9 && !isWinner) {
      msgContainer.innerText = "Game Draw";
      resetBtn.innerText = "Play Again";
    }
  });
});

const checkWinner = () => {
  for (const pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val !== "" && pos2Val !== "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        if (turnO) {
          msgContainer.innerText = "Winner is X";
          resetBtn.innerText = "Play Again";
          return true;
        } else {
          msgContainer.innerText = "Winner is O";
          resetBtn.innerText = "Play Again";
          return true;
        }
      }
    }
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const resetGame = () => {
  turnO = true;
  count = 0;
  enableBoxes();
  msgContainer.innerText = "";
};

resetBtn.addEventListener("click", resetGame);
