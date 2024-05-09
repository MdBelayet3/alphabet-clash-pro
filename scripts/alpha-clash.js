//function for play now btn in home section  
// function play(){
//     const homeSection = document.getElementById('home-section');
//     homeSection.classList.add('hidden')
//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden')
// }

// function for keyboard keys press
function handleKeyBoardPressed(event){
    // get player pressed alphabet
    const pressedAlphabet = (event.key).toUpperCase();
    // console.log('Player pressed',pressedAlphabet);

    // stop game when player pressed 'Esc' key
    if(pressedAlphabet === 'ESCAPE'){
        gameOver();
    }

    //random alphabet
    const randomAlphabet = document.getElementById('Random-alphabet-place').innerText;
    console.log(randomAlphabet)
    if(pressedAlphabet === randomAlphabet){
        // update score
        //step-1: get the current score
        const currentScoreElement = document.getElementById('current-score');
        const currentScore = currentScoreElement.innerText;
        const currentScoreNumber = parseInt(currentScore);

        //step-2: increase this score by 1
        const newScore = currentScoreNumber + 1;
        //step-3: show the update score
        currentScoreElement.innerText = newScore;

        removeBGColorById(randomAlphabet.toLowerCase());
        continueGame();
    }
    else{
        // update life
        //step-1: get the current life
        const currentLifeElement = document.getElementById('current-life');
        const currentLife = currentLifeElement.innerText;
        const currentLifeNumber = parseInt(currentLife);

        //step-2: increase this score by 1
        const newLife = currentLifeNumber - 1;
        //step-3: show the update score
        currentLifeElement.innerText = newLife;
        if(newLife === 0){
             gameOver();
        }
    }
}

// capture keyboard key press
document.addEventListener('keyup',handleKeyBoardPressed);

//function for continue game
function continueGame(){
    // create or generation a random alphabet
   const alphabet = getARandomAlphabet();
   const setAlphabet = document.getElementById('Random-alphabet-place');
   setAlphabet.innerText = alphabet;

    //set background color 
    setBGColorById(alphabet);    
}

//function for play now btn in home section
function play(){
    
    hiddenElementById('home-section');
    hiddenElementById('score-section')
    showElementById('play-ground');

    setInnerTextById('current-life',10);
    setInnerTextById('current-score',0);
    continueGame();
}

//function for game over
function gameOver(){
    hiddenElementById('play-ground');
    showElementById('score-section');

    //update final score 
    const currentScore = getInnerTextById('current-score');
    setInnerTextById('final-score',currentScore);
     
    //clear alphabet highlight bg color 
    const currentAlphabet = getInnerTextById('Random-alphabet-place');
    removeBGColorById(currentAlphabet);

}
