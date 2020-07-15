function rpsGame(yourchoice) {
    let arr = ["rock", "paper", "scissor"];
    let userChoice = yourchoice.id;
    let betchoice = arr[Math.floor(Math.random() * 3)];
    console.log(userChoice);
    console.log("coputer choice:" + betchoice);
    var result = decideWinner(userChoice, betchoice);
    // console.log(result);
    console.log(finalMessage(result));
    var message = finalMessage(result);

    function decideWinner(yourchoice, computerchoice) {
        var rpsdatabase = {
            "rock": { "scissor": 1, "rock": 0.5, "paper": 0 },
            "paper": { "rock": 1, "paper": 0.5, "scissor": 0 },
            "scissor": { "paper": 1, "scissor": 0.5, "rock": 0 }
        };
        var yourScore = rpsdatabase[yourchoice][computerchoice];
        var computerScore = rpsdatabase[computerchoice][yourchoice];
        console.log(yourScore, computerScore);
        return [yourScore, computerScore];
    }

    function finalMessage([yourScore, computerScore]) {
        if (yourScore === 0) {
            return { "message": "you lost", "color": "red" };
        } else if (yourScore === 0.5) {
            return { "message": "you tied!", "color": "yellow" };
        } else {
            return { "message": "you won!", "color": "green" };
        }
    }
    gameResult(userChoice, betchoice, message);
}

function gameResult(userChoiceImage, computerChoiceImage, finalMessage) {
    var rpsImageDataBase = {
        "rock": document.getElementById("rock").src,
        "paper": document.getElementById("paper").src,
        "scissor": document.getElementById("scissor").src,
    }

    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissor").remove();
    // remove();
    var userDiv = document.createElement("div");
    var messageDiv = document.createElement("div");
    var computerDiv = document.createElement("div");
    // var trybtn = document.createElement("button");

    // userDiv.innerHTML = "<img src=' " + rpsImageDataBase[userChoiceImage] +
    //     "' width=150  height=150  style='box-shadow: 0 10px 50px rgba(95, 158, 160, 1); margin: 15px;'    />";
    userDiv.innerHTML = "<img src=' " + rpsImageDataBase[userChoiceImage] +
        "' width=150  height=150  style='box-shadow: 0 10px 50px " + finalMessage.color + " ; margin: 15px;' />";
    messageDiv.innerHTML = "<h2 style='color: " + finalMessage.color + " ; font-size: 40px;  margin: 30px;' >" + finalMessage.message + "</h2>";
    computerDiv.innerHTML = "<img src=' " + rpsImageDataBase[computerChoiceImage] +
        "' width=150  height=150  style='box-shadow: 0 10px 50px " + finalMessage.color + " ; margin: 15px;' />";

    document.getElementById("gamePhotos").appendChild(userDiv);
    document.getElementById("gamePhotos").appendChild(messageDiv);
    document.getElementById("gamePhotos").appendChild(computerDiv);
    // document.getElementById("bt4").appendChild(trybtn);

    // trybtn.addEventListener("click", ta());
}


let btnarr = document.getElementsByClassName('btn');
let copybtnarr = [];
for (i = 0; i < btnarr.length; i++) {
    copybtnarr.push(btnarr[i].classList[1]);

}
// console.log(copybtnarr);

function changeBtnColor(selectedBtn) {
    if (selectedBtn.value === 'random') {
        makeRandomColor();
    } else if (selectedBtn.value === 'red') {
        makeRedColor();
    } else if (selectedBtn.value === 'green') {
        makeGreenColor();
    } else if (selectedBtn.value === 'reset') {
        rReset();
    }
}

function makeRedColor() {
    for (i = 0; i < btnarr.length; i++) {
        btnarr[i].classList.remove(btnarr[i].classList[1]);
        // btnarr[i].style.backgroundColor = "red";
        // btnarr[i].style.color = '#ffffff';
        btnarr[i].classList.add("btn-danger");
    }
}

function makeGreenColor() {
    for (i = 0; i < btnarr.length; i++) {
        btnarr[i].classList.remove(btnarr[i].classList[1]);
        btnarr[i].classList.add("btn-success");
    }
}

function rReset() {
    for (i = 0; i < btnarr.length; i++) {
        btnarr[i].classList.remove(btnarr[i].classList[1]);
        btnarr[i].classList.add(copybtnarr[i]);
    }

}

function makeRandomColor() {
    for (i = 0; i < btnarr.length; i++) {
        btnarr[i].classList.remove(btnarr[i].classList[1]);
        btnarr[i].classList.add(copybtnarr[Math.floor((Math.random()) * 9)]);
        console.log(Math.floor((Math.random()) * 9));
    }
}