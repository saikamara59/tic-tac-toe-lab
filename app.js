/*-------------------------------- Constants --------------------------------*/
const winningCombination =[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];
/*---------------------------- Variables (state) ----------------------------*/
let board  
let turn 
let winner  
let tie  

/*------------------------ Cached Element References ------------------------*/
 const squareEls = document.querySelectorAll(".sqr")
const messageEl = document.querySelector("#message")

const squareIndex = document.querySelector(".board")

const resetBtnEl = document.querySelector('#reset')
/*-------------------------------- Functions --------------------------------*/
function init() {
    board = ['','','','','','','','','']
    turn = 'x'
    winner = false
    tie = false
    render()
    resetBtnEl.addEventListener('click',init);
}
init()
console.log('init called'); 

function render() {
    updateBoard()
    updateMessage()
} 
console.log("render is here")

function updateBoard() {
    board.forEach((square,idx) => {
squareEls[idx].style.fontSize = "75px"
if( square === "x"){
    squareEls[idx].textContent = "x"
}else if (square === "o") {
    squareEls[idx].textContent = "o"
} else {
    squareEls[idx].textContent = ""
}
console.log(squareEls)
    })
}
 function updateMessage() {
if(winner === false && tie === false){
    messageEl.textContent = "your turn"
} else if (winner === false && tie === true){
     messageEl.textContent = "the game is a tie"
} else {
  messageEl.textContent = "your a winner!"
 }

 function placePiece(index){ 
    board[index] = turn
console.log(board)
}

 function checkForWinner(){
winningCombination.forEach((combo) => {
    if (board[combo[0]] !== '' && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) {
   winner = true     
   
    }
});

 }
 function checkForTie(){    
    
        if(board.includes("") === false)      
            return tie = true         
    
}
  function switchPlayerTurn(){ 
if (winner === false) {
   if(turn === 'x'){
    turn = 'o'
} else{turn = 'x'
 }{
     return
    } 
    }
}
  
/*----------------------------- Event Listeners -----------------------------*/
function handleClick(event) {
 console.log(board[event.target.id])
 if (board[event.target.id] === 'x' ||board[event.target.id]=== 'o'|| winner === true){
//    if(board[event.target.id] !== '') {
    return
   }
   placePiece(event.target.id);
   checkForWinner();
   checkForTie();
   switchPlayerTurn();
   render();
console.log(squareEls); 
}
squareEls.forEach(square => {
    square.addEventListener('click',handleClick)
});



}