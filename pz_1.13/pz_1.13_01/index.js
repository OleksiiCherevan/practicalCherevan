const ASK_LANGUAGE_FIRST = "Enter language / Введiть мову en/ua";
const ASK_LANGUAGE_SECOND =
    "Your wrote incorrect language. Plsease choose EN / Ви ввели некоректну мову будь-ласка введiть UA";

const ASK_BY_LANGUAGE = {
    ua : {
        firstAttempt: 'Введiть номер дня недiлi вiд 1 до 7',
        secondAttempt: 'Введiть номер дня недiлi вiд 1 до 7 !!! 1 - 7 не 0 не 8 а (1 aбо 2 aбо 3 aбо 4 aбо 5 aбо 6 aбо 7)',
    },
    en : {
        firstAttempt: 'Enter the day number of the week (from 1 to 7)',
        secondAttempt: 'Enter the day number of the week only (from 1 to 7)!!!',
    }
}

const DAY_BY_NUMBER = {
    en : { 
    
        '1' : 'Monday',
        '2' : 'Thuesday',
        '3' : 'Wednesday',
        '4' : 'Thursday',
        '5' : 'Friday',
        '6' : 'Saturday',
        '7' : 'Sunday',
    }, 
    ua : {
        '1' : 'Понеділок',
        '2' : 'Вівторок',
        '3' : 'Середа',
        '4' : 'Четвер',
        '5' : 'П’ятниця',
        '6' : 'Субота',
        '7' : 'Неділя',
    }
}



const GetSpeciaWordFromPrompt = (
    firstAttempt,
    secondAttempt,
    isCorrectPredicate
) => {
    let specialWord = "";
    let attempts = 0;

    do {
        specialWord = prompt(attempts < 1 ? firstAttempt : secondAttempt).toLowerCase();
        attempts++;
    } while (!isCorrectPredicate(specialWord));

    return specialWord;
};

let language = GetSpeciaWordFromPrompt(
    ASK_LANGUAGE_FIRST,
    ASK_LANGUAGE_SECOND,
    language => language == "ua" || language == "en"
);

let dayOfWeek = GetSpeciaWordFromPrompt(
    ASK_BY_LANGUAGE[language].firstAttempt,
    ASK_BY_LANGUAGE[language].secondAttempt,
    day => day >= 1 && day <= 7
    )


alert(`${DAY_BY_NUMBER[language][dayOfWeek]}`);
