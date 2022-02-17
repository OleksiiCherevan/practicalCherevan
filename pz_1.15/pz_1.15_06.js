const DAY_OF_WEEK = {
    0: "недiля",
    1: "понедiлок",
    2: "вiвторок",
    3: "середа",
    4: "четверг",
    5: "п`ятниця",
    6: "суббота",
};

const MONTH = {
    0: "сiчня",
    1: "лютого",
    2: "березня",
    3: "квiтня",
    4: "травня",
    5: "червня",
    6: "липня",
    7: "серпня",
    8: "вересня",
    9: "жовтня",
    10: "листопада",
    11: "грудня",
};

const GetCurrentTime = () => {
    let d = new Date();

    return `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}, ${
        DAY_OF_WEEK[d.getDay()]
    }, ${d.getDate()} ${MONTH[d.getMonth()]} ${d.getFullYear()} року`;
};

console.log(GetCurrentTime());
