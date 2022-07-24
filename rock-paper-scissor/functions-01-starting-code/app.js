const startGameBtn = document.getElementById('start-game-btn');


const ROCK='ROCK';
const PAPER='PAPER';
const SCISSORS='SCISSORS';
const DEFAULT_USER_CHOICE=ROCK;
const RESULT_DRAW='DRAW';
const RESULT_PLAYER_WINS='You won';
const RESULT_COMPUTER_WINS='Computer Won';

let gameIsRunning=false;

//annonymous function
const getPlayerChoice=function(){

    const selection=prompt(`${ROCK} ,${PAPER} or ${SCISSORS}?`,'').toUpperCase();

    if(selection!=ROCK && selection!=PAPER && selection!=SCISSORS){
        alert(`Invalid choice! we have selected ${DEFAULT_USER_CHOICE} for you`);
        return DEFAULT_USER_CHOICE;
    }
    return selection;
};

const getComputerChoice=function(){
    const randomValue=Math.random();

    if(randomValue<0.34){
        return ROCK;
    }else if(randomValue<0.67){
        return PAPER;
    }else{
        return SCISSORS;
    }
};

//arrow function
const getWinner=(cChoice,pChoice)=>{

    //this can be used in arrow function   (comapre ? return statement : 2nd compare ? return statement : and so on)
    return cChoice===pChoice?RESULT_DRAW 
    :cChoice===ROCK && pChoice===PAPER || cChoice===SCISSORS && pChoice===ROCK || cChoice===PAPER && pChoice===SCISSORS?RESULT_PLAYER_WINS
    :RESULT_COMPUTER_WINS
    //or

  //  if(cChoice===pChoice){
   //     return RESULT_DRAW;
  //  }
  //  else if(cChoice===ROCK && pChoice===PAPER){
 //       return RESULT_PLAYER_WINS;
 //   }else if(pChoice===ROCK && cChoice===PAPER){
 //       return RESULT_COMPUTER_WINS;
 //   }else if(cChoice===ROCK && pChoice===SCISSORS){
 //       return RESULT_COMPUTER_WINS;
 //   }else if(cChoice===SCISSORS && pChoice===ROCK){
 //       return RESULT_PLAYER_WINS;
  //  }else if(cChoice===PAPER && pChoice===SCISSORS){
  //      return RESULT_PLAYER_WINS;
  //  }else if(cChoice===SCISSORS && pChoice===PAPER){
  //      return RESULT_COMPUTER_WINS;
  //  }
}

//annonymus function in an eventlistener
startGameBtn.addEventListener('click',function(){
    if(gameIsRunning){
        return;
    }
    gameIsRunning=true;
    console.log("Game is starting....!");
    const playerSelection=getPlayerChoice();
    const computerChoice=getComputerChoice();
    const winner=getWinner(computerChoice,playerSelection);
   
    let message;
    if(winner===RESULT_DRAW){
        message=`You Picked ${playerSelection} and computer choose ${computerChoice} therefore the game is drawn`
    }else if(winner===RESULT_PLAYER_WINS){
        message=`You Picked ${playerSelection} and computer choose ${computerChoice} therefore the You WON!`
    }else {
        message=`You Picked ${playerSelection} and computer choose ${computerChoice} therefore the Computer Won!`
    }

    alert(message);
    gameIsRunning=false;
});

//not related to game
//rest parameter(...variablename)
//useful if we dont know how many values a parameter can take in an argument of function
function sumup(...numbers){
    let sum=0;
    for(let num of numbers){
        sum+=num;
    }
    return sum;
}

console.log(sumup(1,-2,4,6,-1,7));
console.log(sumup(5,7,9,3,-5,-8,10,4,7,9));

//you can have anonther argument oly infront of the rest parameter not after it
//function sumup(a,...numbers)   ->allowed
//function sumup(...numbers,a)   ->notallowed ...numbers will take a parameter values into it


//passing function as argument in a function

//anynonumous arrow function
const resultHandler=(result)=>{
alert("The result is:"+result);
}
function subtract(resultHandler,...numbers){

    let subtract=0;
    for(let num of numbers){
        subtract-=num;
    }
    resultHandler(subtract);
}

subtract(resultHandler,12,13,56,3,4);
subtract(resultHandler,5,46,3,32,6,75,34,23);


//function in a function  with rest parameters
const sums=(...numnbers)=>{
    
    const validate=(number)=>{
        return isNaN(number)?0:number;
    }
    let sum=0;
    for(let num of numnbers){
        sum+=validate(num);
    }
    return sum;
}
console.log(sums(1,2,3,4,5,6));

//bind() function
let runner={
    name:'vamsi',
    run:function(speed){
        console.log(this.name+" runs at the speed of :"+speed+"km/h");
    }
}

let gamer={
    name:'harsha',
    fly:function(speed){
        console.log(this.name+" flies at the speed of :"+speed+"km/h");
    }
}

let r=runner.run.bind(gamer,20);
r();

//2 bind()
var geeks1 = {
    name : "ABC",
    article: "C++"
    }
    //object geeks2
      var geeks2 = {
    name : "CDE",
    article: "JAVA"
    }
        
      //object geeks3
      var geeks3 = {
    name : "IJK",
    article: "C#"
    }
      
    function printVal(){
       console.log(this.name+" contributes about "+this.article);
       }
            
      var printFunc2= printVal.bind(geeks1);
       //using bind() 
       // bind() takes the object "geeks1" as parameter//
      printFunc2();
        
      var printFunc3= printVal.bind(geeks2);
      printFunc3();
        
      var printFunc4= printVal.bind(geeks3);
      printFunc4();