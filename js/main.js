import Game from "./Game.js";
import GameView from "./GameView.js";

let game=new Game();
let gameView=new GameView();

document.querySelector(".restart")
.addEventListener("click",()=>{
    console.log("New game");
    onRestartClick();
})

gameView.updateBoard(game);
const tiles=document.querySelectorAll(".board-tile");

tiles.forEach((tile) => {
    tile.addEventListener("click",()=>{
        onTileClick(tile.dataset.index);
        
    })
});
function onTileClick(i){
    game.makeMove(i);
    // game.nextTurn();
    gameView.updateBoard(game);
}
function onRestartClick(){
    game=new Game();
    gameView.updateBoard(game);
    document.querySelector(".win").style.display="none";
    document.querySelector(".right").style.display="flex";
    
}
gameView.updateBoard(game);