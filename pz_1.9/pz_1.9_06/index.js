const MIN_MONTH = 1;
const MAX_MONTH = 12;

const MONTH_SPRING = "Весна";
const MONTH_SUMMER = "Лiто";
const MONTH_FALL = "Осiнь";
const MONTH_WINTER = "Зима";

const FIRST_MEETING = "Введiть мiсяць: 1 - 12";
const DUMB_PERSON =
    "Введiть мiсяць: 1 - 12 (Number/ Integer/ Число) або витрачайте свiй час далi...";

let isCorrect = false;
let month;

do {
    let dialogText = FIRST_MEETING;
    month = window.prompt(dialogText);
    month = parseInt(month)

    isCorrect = !isNaN(month) || month < MIN_MONTH || month > MAX_MONTH;

    if (!isCorrect) {
        window.alert(DUMB_PERSON);
    }
} while (!isCorrect);

console.log(month);

let monthString =
    month >= 3 && month <= 5 ?
    MONTH_SPRING :
    month >= 6 && month <= 8 ?
    MONTH_SUMMER :
    month >= 9 && month <= 11 ?
    MONTH_FALL :
    MONTH_WINTER;

window.alert(`Назва пори року пiд номером "${month}" ->  ${monthString}`)