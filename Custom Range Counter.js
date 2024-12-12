let fromUserInputEl = document.getElementById("fromUserInput");
let toUserInputEl = document.getElementById("toUserInput");
let counterTextEl = document.getElementById("counterText");
let startBtnEl = document.getElementById("startBtn");

function displayNumbers(fromCountNum, toCountNum) {
    let currentCount = fromCountNum;
    counterTextEl.textContent = currentCount;

    let result = setInterval(function() {
        if (currentCount < toCountNum) {
            currentCount += 1;
            counterTextEl.textContent = currentCount;
        } else {
            clearInterval(result);
        }
    }, 1000);
}

startBtnEl.onclick = function() {
    let fromVal = fromUserInputEl.value;
    let toVal = toUserInputEl.value;

    if (fromVal === "") {
        alert("Please enter from value");
    } else if (toVal === "") {
        alert("Please enter to value");
    } else {
        let fromValNum = parseInt(fromVal);
        let toValNum = parseInt(toVal);
        displayNumbers(fromValNum, toValNum);
    }
}