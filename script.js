function game(name,marker) {
    const gameboard = ['x','0'];
    const boxclick = document.querySelectorAll('.box')
    const gameplayers = {
        name : name,
        marker : marker
    }
    function swap(){
       turner = turner ? false : true

    }
    function render() {
        boxclick.forEach((button) => {
            button.addEventListener('click',()=>{
                button.textContent = marker
            })
            swap()
        })
    }
    function play() {

        render()
    }
    return {
        gameplayers,play
    }
}

let turner = true;

const player1 = game('sampath', '0');
const player2 = game('alex','c')

if(turner){
    player1.play()
} else {
    player2.play()
}

console.log(player1,player2)
// const boxclick = document.querySelectorAll('.box')

// boxclick.forEach((button) => {
//     button.addEventListener('click',()=>{
//         button.textContent = 'X'
//     })
// })
