let playerText=document.getElementById('playerText')
let resetBtn=document.getElementById('resetBtn')
let boxes=Array.from(document.getElementsByClassName('box'))

const O_TEXT="O"
const X_TEXT="X"
let currentPlayer=X_TEXT
let spaces=Array(9).fill(null)

const startGame=()=>{
    boxes.forEach(box=>box.addEventListener('click',boxClicked))
}

function boxClicked(e)
{
    const id=e.target.id
    if(!spaces[id]){
        spaces[id]=currentPlayer
        e.target.innerText=currentPlayer

        if(PlayerHasWon()!==false){
            
        }
        currentPlayer=currentPlayer==X_TEXT?O_TEXT:X_TEXT
    }
}
const conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function PlayerHasWon(){
    for(const condition of conditions){
        let[a,b,c]=condition

        if(spaces[a] && (spaces[a]==spaces[b] && spaces[a]==spaces[c]))
            return [a,b,c]
    }
    return false
}

resetBtn.addEventListener('click',reset)
function reset(){
    spaces.fill(null)
    boxes.forEach(box=>{
        box.innerText=''
    })
    currentPlayer=X_TEXT
}
startGame()


// // Function to handle player moves
// const ticTacToe = (element, index) => {
//     // Your game logic here

//     /*
//     **Part 1: Winning Conditions (Add your code here)**

//     1. Implement the logic to check for winning conditions using the 'conditions' array.
//     2. Display a winning message in the 'result' element when a player wins.
//     3. Disable all buttons after a win.
//     */

//     // Your code to update the game state and check for a win
//     // ...

//     // Your code to display the current player's turn
//     // ...

//     // Your code to handle button and cell interactions
//     // ...
// };

//     /*
//     **Part 2: Reset Function (Add your code here)**

//     1. Implement a new function that resets the game to its initial state.
//     2. Ensure the 'cells', 'btns', and 'currentPlayer' variables are reset.
//     3. Update the 'result' element to indicate the current player's turn.
//     4. Re-enable all buttons for a new game.
//     */

// // Function to reset the game
// const resetGame = () => {
//     // Your code to reset the game state
//     // ...

//     // Your code to update the 'result' element
//     // ...

//     // Your code to re-enable buttons
//     // ...
// };

// btns.forEach((btn, i) => {
//     btn.addEventListener('click', () => ticTacToe(btn, i));
// });

// document.querySelector('#reset').addEventListener('click', resetGame);
