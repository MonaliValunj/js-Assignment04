let userChoice = function (uc){
    uc = window.prompt("Enter your choice; (rock/paper/scissor) ");
    //console.log("user choice: "+ uc);
    if( uc !== "rock" && uc !== "paper" && uc !== "scissor"){
        window.alert("Please Enter valid input")
    }
    return uc;
}
console.log("user choice: "+ userChoice());

//let computerChoice = Math.round(Math.random()*2)+1;
let computerChoice = function (c){
    let choice = " ";
    c = Math.round(Math.random()*2)+1;
    console.log("computerChoice (random number): " + c)

    if(c === 1 ){
        choice = "rock";
    }else if(c === 2){
        choice = "paper";
    }else if(c === 3){
        choice = "scissor";
    }
    return choice;
}
console.log("computer choice in string is : " + computerChoice());

function playGame(){
    if(userChoice() === "rock" && computerChoice() === "paper" ){
        
    }
}