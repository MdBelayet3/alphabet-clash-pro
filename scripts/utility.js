// function for hide 
function hiddenElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

//function for show
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

// function for set background color in key board keys 
function setBGColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#FFA500]')
} 

// function for remove background color in key board keys 
function removeBGColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-[#FFA500]')
} 

//function for get inner text by id
function getInnerTextById(elementId){
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    return elementText;
}

//function for set inner text by id
function setInnerTextById(elementId,value){
    const element = document.getElementById(elementId);
     element.innerText = value;
}

// function for generation a random alphabet
function getARandomAlphabet(){
    //get or create alphabets array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetString.split('');

    //get a random index between 0-25
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const randomAlphabet = alphabets[index];
    return randomAlphabet;


}

