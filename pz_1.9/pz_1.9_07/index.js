const FIRST_MEETING = "Введiть температуру: °C";
const DUMB_PERSON =
    "Введiть температуру в цельсiях °C: (Number/ Integer/ Число) або витрачайте свiй час далi...";

let isCorrect = false;
let tempCelsium = 0;
do {
    let dialogText = FIRST_MEETING;

    tempCelsium = window.prompt(dialogText);
    tempCelsium = parseInt(tempCelsium)

    isCorrect = !isNaN(tempCelsium);

    if (!isCorrect) {
        window.alert(DUMB_PERSON);
    }
} while (!isCorrect);

console.log(tempCelsium);

let tempFar = (9 / 5) * tempCelsium + 32

window.alert(`Температура в цельсiях: "${tempCelsium} °C" ->  ${tempFar} °F`)