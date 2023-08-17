export default class GameView{
    constructor(){
        console.log("init gameView");
    }
    updateBoard(game){
        this.updataTile(game);
        const winningComination=game.findWinningCombinations();
        for(var i=0;i<game.board.length;i++){

            const tile=document.querySelector(`.board-tile[data-index='${i}']`);
            tile.classList.remove("winner-tile");
            let tiletype=game.board[i]=='X'?"Player-x":"Player-o";

            tile.innerHTML=`<span class=${tiletype}">${game.board[i]?game.board[i]:""}</span>`;

            if(winningComination&&winningComination.includes(i)){
                tile.classList.add("winner-tile");
                document.querySelector(".showWinner").innerText=tiletype;
                setTimeout(function(){
                    document.querySelector(".win").style.display="flex";
                    document.querySelector(".right").style.display="none";
                },2000);
                
            }
        }
    }

    updataTile(game){
        const playerx=document.querySelector(".player-x");
        const playero=document.querySelector(".player-o");
        playero.classList.remove("active");
        playerx.classList.remove("active");
        if(game.turn=='X'){
            playero.classList.add("active");
        }else{
            playerx.classList.add("active");
        }
    }
}