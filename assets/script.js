let molewrapper = document.getElementById("moles__wrapper");
let scoringArea = document.getElementById("score");
let moles = [0, 0, 0, 0, 1, 0, 0, 0, 0, 0 , 0 ,0 ,0 ,0 ,0 , 0];
console.log(moles);

let score = 0;

function displayMole() {
    molewrapper.innerHTML="";
    let random = moles.sort((a,b) => 0.5 - Math.random());
    console.log(random);

    for (mole of moles){
        let molehill = document.createElement("div");
        if ( mole == 1 ){
            molehill.classList.add("mole");
        }
        molewrapper.appendChild(molehill);
        
    }
}

setInterval(displayMole, 2000);

molewrapper.addEventListener('click', (e) => {
    if (e.target.classList.contains("mole")){
        score += 100;
        scoringArea.innerHTML = `Score : ${score} point${ score >= 1 ? "" : "s"}`;
    } else {
        score -= 50;
        scoringArea.innerHTML = `Score : ${score} point${ score >= 1 ? "" : "s"}`;
    }
})


