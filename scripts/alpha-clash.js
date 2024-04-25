//function for play now btn in home section  
// function play(){
//     const homeSection = document.getElementById('home-section');
//     homeSection.classList.add('hidden')
//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden')
// }

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
    showElementById('play-ground');
    continueGame();
}

//function for score btn in play ground section
// function score(){
//     const playGroundSection =document.getElementById('play-ground');
//     playGroundSection.classList.add('hidden');
//     const scoreSection = document.getElementById('score-section');
//     scoreSection.classList.remove('hidden');
// }