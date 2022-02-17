const MAX = 100;

const COLD = "COLD";
const VERY_COLD = "VERY_COLD";
const HOT = "HOT";
const VERY_HOT = "VERY_HOT";

const COLDER = "COLDER";
const HOTER = "HOTER";

const [YES, NO] = ['yes', 'no']

const [VERY_HOT_NUMBER, HOT_NUMBER, COLD_NUMBER, VERY_COLD_NUMBER] = [10, 20, 50 ,75]

const GetCurrentTime = () => {
    let d = new Date();

    return `${d.getDate()}.${d.getMonth()}.${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} `;
};

const GetRandomNumber = (max) => Math.floor(Math.random() * max);

const Game = () => {
    const askNumber = GetRandomNumber(MAX);
    console.log(`Ask number ${askNumber}`);
    let input = -1;
    let laskInput = -1;
    let lastTemp = MAX;
    let attempts = 0;

    do {
        let date = GetCurrentTime();

        let temp = Math.abs(askNumber - input);
        
        let achievemessage =
        temp < VERY_HOT_NUMBER
        ? VERY_HOT
        : temp < HOT_NUMBER
        ? HOT
        : temp < COLD_NUMBER
        ? COLD
        : VERY_COLD;
        
        let isHoter = temp < lastTemp;
        let progressMessage = isHoter ? HOTER : COLDER;
        progressMessage = attempts != 1 ? progressMessage : "";

        let message = `${askNumber} ${date} Спроба ${attempts}: Число: ${laskInput} - не вiрно \n ${achievemessage} ${progressMessage}`;
        
        input = prompt(
            input !== -1 ? message : `Enter the number > 0 && number < ${MAX}`
            );
            
        laskInput = input;
        lastTemp = temp;
        
        attempts++;
    } while (input != askNumber);

    alert(`Congratulation! за 10 спроб ви вгадали число ${askNumber}`);
};

let answer = NO;
do {
    Game();
    answer = prompt("Do you want to play more? yes or no");
} while (YES.includes(answer));
