const ONE_HUNDRED = 100;

let GetHundreds = (number) => {
    return Math.floor(number * ONE_HUNDRED) / ONE_HUNDRED
}

class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    
    // який буде виводити зарплату працівника. 
    // може краще повертати значення?
    getSalary() {
        let salary = this.rate * this.days;
        console.log(GetHundreds(salary));
    }
}

let workerVasa = new Worker('Vasa', 'Vasiliev', 32.331, 56)

workerVasa.getSalary()


