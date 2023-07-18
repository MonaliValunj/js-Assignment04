uc = window.prompt("Enter your choice; (rock/paper/scissor) ");
    console.log("user choice: "+ uc);
    if( uc !== "rock" && uc !== "paper" && uc !== "scissor"){
        window.alert("Please Enter valid input")
    }

    cc = Math.round(Math.random()*2);
    console.log("computerChoice (random number): " + cc)
    let computerChoice = " ";
    if(cc === 0 ){
        computerChoice = "rock";
    }else if(cc === 1){
        computerChoice = "paper";
    }else if(cc === 2){
        computerChoice = "scissor";
    }
    console.log("computerChoice : "+ computerChoice)

    if(uc === "rock" && computerChoice === "scissor"){
        window.alert("You won!!");
    }else if(uc === "paper" && computerChoice === "rock"){
        window.alert("You won!!");
    }else if(uc === "scissor" && computerChoice === "paper"){
        window.alert("You won!!");
    }else if(uc === "rock" && computerChoice === "paper"){
        window.alert("You lost!!");
    }else if(uc === "paper" && computerChoice === "scissor"){
        window.alert("You lost!!");
    }else if(uc === "scissor" && computerChoice === "rock"){
        window.alert("You lost!!");
    }else if(uc === computerChoice){
        window.alert("tie")
    }