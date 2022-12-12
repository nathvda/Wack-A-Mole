let molewrapper = document.getElementById("moles__wrapper");
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
    }
    clickCount = 0;
}

let difficulty = 2000;

setInterval(displayMole, difficulty);

molewrapper.addEventListener('click', (e) => {
    if (e.target.classList.contains("mole") && clickCount == 0){
        score += 100;
        scoringArea.innerHTML = `Score : ${score} point${ (score >= 1) ? "" : "s"}`;
        clickCount = 1;
    } else if (clickCount == 0) {
        score -= 50;
        scoringArea.innerHTML = `Score : ${score} point${ (score >= 1) ? "" : "s"}`;
        clickCount = 1;
    } else if (clickCount !== 0){
    }
})
