$(document).ready(function(){

    var randomNumber = Math.floor(Math.random()*100+1);

$("#rNumber").text(randomNumber);

 var num1 = Math.floor(Math.random()*10),
     num2 = Math.floor(Math.random()*10),
     num3 = Math.floor(Math.random()*10),
     num4 = Math.floor(Math.random()*10);

var wins = 0,
    losses = 0,
    total = 0;

$("#nWins").text("Number of wins: " + wins);
$("#nLoss").text("Number of losses: " + losses);

function newGame(){
    randomNumber = Math.floor(Math.random()*100+1);
    $("#rNumber").text(randomNumber);
    num1 = Math.floor(Math.random()*10);
    num2 = Math.floor(Math.random()*10);
    num3 = Math.floor(Math.random()*10);
    num4 = Math.floor(Math.random()*10);
    total = 0;
    $("#scores").text(total);
}

function winner(){
    alert("you won!")
    wins++;
    $("#nWins").text("Number of wins: " + wins);
    newGame();
}

function loser(){
    alert("you lost");
    losses++;
    $("#nLoss").text("Number of losses: " + losses);
    newGame();
}
$("#image1").on("click", function(){
    total = total + num1;
   // console.log("Your total is: " + total);
    $("#scores").text("Your total score is: " +total) ;
   var result="Your total score is:" + total;
    if(total === randomNumber){
        console.log(result);
        winner()
    }else if(total > randomNumber){
        loser()
    }
});

$("#image2").on("click", function(){
    total = total + num2;
    //console.log("Your total is: " + total);
   $("#scores").text("Your total score is: " + total);
   var result="Your total score is:" + total;
    if(total === randomNumber){
        console.log(result);
        winner()
    }else if(total > randomNumber){
        loser()
    }
});
$("#image3").on("click", function(){
    total = total + num3;
    //console.log("Your total is: " + total);
    $("#scores").text("Your total score is: " + total);
    var result="Your total score is:" + total;
    if(total === randomNumber){
        console.log(result);
        winner()
    }else if(total > randomNumber){
        loser()
    }
});
$("#image4").on("click", function(){
    total = total + num4;
    //console.log("Your total is: " + total);
    $("#scores").text("Your total score is: " + total);
  var result="Your total score is:" + total;
    if(total === randomNumber){
        console.log(result);
        winner()
    }else if(total > randomNumber){
        loser()

    }
});
});
