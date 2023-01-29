const boxclick = document.querySelectorAll('.box');
currentplayer = 'X';
gameover = false


function render() {
    boxclick.forEach((box) => {
        box.addEventListener('click', () => {
            box.textContent = currentplayer;
            getmarker();
            console.log(recordmoves(box))
        });
    });
}

function getmarker() {
        if ( currentplayer === 'X') {
            currentplayer = 'O';
        } else {
            currentplayer = 'X';
        }
        return
}

function recordmoves(box) {
    // for(let i = 0; i < 9 ; i++) {
    //     if ( m % 2 === 0) {
    //         m += 1
    //         return 'O';
    //     } else {
    //         m += 1
    //         return 'X';
    //     }
    // }
    return box.id
}
render()
// let board = document.querySelector('.board')
