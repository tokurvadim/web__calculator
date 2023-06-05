const digitField = document.getElementById("field");

const pointSign = ".";
const divSign = "/";
const multiSign = "*";
const plusSign = "+";
const minusSign = "-";
const percentSign = "%";
const numArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

const calcArray = ["", "", ""];


function clickDigit(digit) {
    if (digitField.style.width.toString() >= "250px") return undefined;
    digitField.textContent === "0" ? digitField.textContent = digit : digitField.textContent += digit;
}

function clearField(){
    digitField.textContent = "0";
    calcArray.forEach((item) => item = "")
}

function addPoint() {
    for (let symbol of digitField.textContent) {
        if (symbol === pointSign) return undefined;
    }
    digitField.textContent += pointSign;
}

function reverseSign() {
    const hasSign = function (){
        for (let item of numArray) {
            if (digitField.textContent[0] === item) return true;
        }
        return false;
    }
    if (hasSign()) digitField.textContent = minusSign + digitField.textContent;
    else digitField.textContent = digitField.textContent.replace(minusSign, "");
}

function division(){
    calcArray[1] = divSign;
    calcArray[0] = digitField.textContent;
    digitField.textContent = "0";
}

function multi(){
    calcArray[1] = multiSign;
    calcArray[0] = digitField.textContent;
    digitField.textContent = "0";
}

function plus(){
    calcArray[1] = plusSign;
    calcArray[0] = digitField.textContent;
    digitField.textContent = "0";
}

function minus(){
    calcArray[1] = minusSign;
    calcArray[0] = digitField.textContent;
    digitField.textContent = "0";
}

function remainder(){
    calcArray[1] = percentSign;
    calcArray[0] = digitField.textContent;
    digitField.textContent = "0";
}

function equals(){
    calcArray[2] = digitField.textContent.toString();
    if (calcArray[1] === divSign && calcArray[2] !== "0") digitField.textContent = Math.round(Number(calcArray[0]) / Number(calcArray[2]));
    else if (calcArray[1] === multiSign) digitField.textContent = Number(calcArray[0]) * Number(calcArray[2]);
    else if (calcArray[1] === plusSign) digitField.textContent = Number(calcArray[0]) + Number(calcArray[2]);
    else if (calcArray[1] === minusSign) digitField.textContent = Number(calcArray[0]) - Number(calcArray[2]);
    else if (calcArray[1] === percentSign) digitField.textContent = Number(calcArray[0]) % Number(calcArray[2]);
    calcArray[1] = "";
    calcArray[0] = digitField.textContent.toString();
}