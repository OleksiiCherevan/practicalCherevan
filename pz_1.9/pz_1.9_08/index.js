const MIN_DAY = 1;
const MAX_DAY = 7;

const MONDAY = "Понедiлок";
const THUESDAY = "Вiвторок";
const WEDNESDAY = "Середа";
const THURSDAY = "Четвер";
const FRIDAY = "П`ятниця";
const SATURDAY = "Субота";
const SUNDAY = "Недiля";

const FIRST_MEETING = "Введiть день: 1 - 7";
const DUMB_PERSON =
    "Введiть мiсяць: 1 - 7 (Number/ Integer/ Число) або витрачайте свiй час далi...";

let isCorrect = false;
let day;

let dialogText = FIRST_MEETING;
day = window.prompt(dialogText);
day = parseInt(day);

console.log(day);

let dayString =
    day == 1 ?
    MONDAY :
    day == 2 ?
    THUESDAY :
    day == 3 ?
    WEDNESDAY :
    day == 4 ?
    THURSDAY :
    day == 5 ?
    FRIDAY :
    day == 6 ?
    SATURDAY :
    day == 7 ?
    SUNDAY :
    DUMB_PERSON;

window.alert(`Назва пори року пiд номером "${day}" ->  ${dayString}`);