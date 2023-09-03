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

        if(PlayerHasWon()!==false)
        {
            document.getElementsByClassName('box').disabled=true
            if(currentPlayer==X_TEXT){
                result.innerHTML='Player X won!🎉'}
            else{
                result.innerHTML='Player O won!🎉'}
        }
        
        currentPlayer=currentPlayer==X_TEXT?O_TEXT:X_TEXT
        // if(currentPlayer==X_TEXT)
        //     result.innerHTML='Player X Turn'
        // else
        //     result.innerHTML='Player O Turn'

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
    result.innerHTML=''
}
startGame()
