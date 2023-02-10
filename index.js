const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const firstGen = document.getElementById("first-gen");
const secondGen = document.getElementById("second-gen");
const btn = document.getElementById("btn");




function generatePassword(){
     
    let randomCharacters =""
    let randomCharacters2=""
    
    while (randomCharacters.length<15){
        let random = Math.floor(Math.random()*characters.length);
        charactersGenerated= characters[random];
        randomCharacters+= charactersGenerated;
    }         
    
     while (randomCharacters2.length<15){
        let random = Math.floor(Math.random()*characters.length);
        charactersGenerated= characters[random];
        randomCharacters2+= charactersGenerated;
    }   
    
    firstGen.textContent= randomCharacters;
    secondGen.textContent= randomCharacters2;

}





