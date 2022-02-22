// Manchester()
function GoalM(){
    var Manchester1=document.getElementById("goal1")
    NewScore=Manchester1.innerHTML
    NewScore++;
    document.getElementById("goal1").innerHTML=NewScore
}

function FoulM(){
    var Manchester1=document.getElementById("foul1")
    NewScore=Manchester1.innerHTML
    NewScore++;
    document.getElementById("foul1").innerHTML=NewScore
}

// Arsenal
function GoalA(){
    var Arsenal2=document.getElementById("goal2")
    NewScore=Arsenal2.innerHTML
    NewScore++;
    document.getElementById("goal2").innerHTML=NewScore
}

function FoulA(){
    var Arsenal2=document.getElementById("foul2")
    NewScore=Arsenal2.innerHTML
    NewScore++;
    document.getElementById("foul2").innerHTML=NewScore
}


// Reset
function Reset(){
    var reset3=document.getElementById("reset3")
    NewScore=reset3.innerHTML
    // var goal1 = document.getElementById("goal1").innerHTML
    // var foul1 = document.getElementById("foul1").innerHTML
    NewScore=0;
    document.getElementById("goal1").innerHTML=NewScore
    document.getElementById("foul1").innerHTML=NewScore
    document.getElementById("goal2").innerHTML=NewScore
    document.getElementById("foul2").innerHTML=NewScore
    
}

// var img = document.getElementById("winner1");

// function photoSwitch(){

//     // begin your CSS animation by applying class
//     img.setAttribute("class", "some-animation");

//     // have javascript wait 5s before switching the image source
//     setTimeout(function(){
//         img.src = "winner.gif";
//     },500);
// }

// photoSwitch
    

