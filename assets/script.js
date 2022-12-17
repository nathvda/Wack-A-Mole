let molewrapper = document.getElementById("moles__wrapper");

let element = document.createElement("button");
let buttonText = document.createTextNode("New Game");

element.appendChild(buttonText);
element.setAttribute("id", "startGame");
molewrapper.appendChild(element);

element.addEventListener("click", (e) =>{
    e.target.remove();
    startGame();}
    );


let scoringArea = document.getElementById("score");

let moles = [0, 0, 0, 0, 1, 0, 0, 0, 0, 0 , 0 ,0 ,0 ,0 ,0 , 0];

let score = 0;
let clickCount = 0;


function displayMole() {
    molewrapper.innerHTML = "";


    for (let i = moles.length-1 ; i > 0 ; i-- ) {
    let j = Math.floor(i * Math.random());
    let temp = moles[i];
    moles[i] = moles[j];
    moles[j] = temp;
    }

    for (mole of moles){
        let molehill = document.createElement("div");
        if ( mole == 1 ){
            molehill.classList.add("mole");
        }
        molewrapper.appendChild(molehill);
        molehill.classList.add("moleitem");
    }
    clickCount = 0;
}

let difficulty = 1000;

function startGame(){
    let displaying = setInterval(displayMole, difficulty);

    let i = 60;
let endOfGame = setInterval(() => {
i--; 
document.getElementById("timer").innerHTML = `${i} seconde${(i > 1)? "s" : ""} restante${(i > 1)? "s" : ""}`;

if (i == 0){
    endGame();
    clearInterval(endOfGame);
    clearInterval(displaying);
}

},1000);

setTimeout(() => {molewrapper.addEventListener('click', (e) => {
    if (e.target.classList.contains("mole") && clickCount == 0){
        e.target.remove();
        score += 100;
        scoringArea.innerHTML = `Score : ${score} point${ (score == 1 || score == -1) ? "" : "s"}`;
        clickCount = 1;
    } else if (clickCount == 0) {
        score -= 50;
        scoringArea.innerHTML = `Score : ${score} point${ (score == 1 || score == -1) ? "" : "s"}`;
        clickCount = 1;
    } else if (clickCount !== 0){
    }
})}, 1000 )


}




function endGame(){
    molewrapper.innerHTML = `<div class="victory__wrapper"><div class="victory">Game Over!</div>
    <div class="yourScore">Final score : ${score}</div></div>`;
}



