class Supplier {
    constructor(name, dayPower, nightPower) {
        this.name = name;
        this.dayPower = dayPower;
        this.nightPower = nightPower;
    }

    getPower(isNigth) {
        return isNigth ? this.nightPower : this.dayPower;
    }
}

class PowerPlant extends Supplier {
    constructor(name, dayPower, nightPower = dayPower) {
        super(name, dayPower, nightPower);
    }
}

class SolarPanel extends Supplier {
    constructor(name, dayPower, nightPower = 0) {
        super(name, dayPower, nightPower);
    }
}

class Consumer {
    constructor(name, flatCount) {
        this.name = name;
        this.flatCount = flatCount;

        this.dayConsume = 4;
        this.nigthConsume = 1;
    }

    getPower(isNigth) {
        return (isNigth ? this.nigthConsume : this.dayConsume) * this.flatCount;
    }
}

class ElectricityLine {
    constructor(name, maxPower, price) {
        this.name = name;
        this.maxPower = maxPower;
        this.price = price;
    }

    getPower() {
        return this.maxPower;
    }

    getPrice() {
        return this.price;
    }
}

class City {
    constructor(name, isNigth, suppliers = [], consumers = [], lines = []) {
        this.name = name;
        this.isNigth = isNigth;
        this.suppliers = suppliers;
        this.consumers = consumers;
        this.lines = lines;
        this.totalMegaWatt = 0;
    }

    getConvertedSupply(supply, isNigth) {
        return `Supplier: ${supply.name} gives ${supply.getPower(
            isNigth
        )} megaWatts\n`;
    }

    getConvertedConsumer(consumer, isNigth) {
        return `Consumer: ${consumer.name} needs ${consumer.getPower(
            isNigth
        )} megaWatts\n`;
    }

    getInfo() {
        let res = `time: ${this.isNigth ? "nigth" : "day"}\n`;

        res += "Suppliers:\n";
        let totalSuppliePower = 0;
        this.suppliers.forEach((supply) => {
            let supplyPower = supply.getPower(this.isNigth);
            this.totalMegaWatt += supplyPower;
            totalSuppliePower += supplyPower;
            res += this.getConvertedSupply(supply, this.isNigth);
        });
        res += `Total supply power: ${totalSuppliePower}\n`;

        res += "Consumers:\n";
        let totalConsumerPower = 0;
        this.consumers.forEach((consumer) => {
            let consumerPower = consumer.getPower(this.isNigth);
            this.totalMegaWatt -= consumerPower;
            totalConsumerPower += consumerPower;
            res += this.getConvertedConsumer(consumer, this.isNigth);
        });
        res += `Total consume power: ${totalConsumerPower}\n`;

        
        res += `City have/need extra ${totalSuppliePower - totalConsumerPower} megaWatt\n`

        res += "Lines:\n";
        let totalLinePower = 0;
        this.lines.forEach((line) => {

            let usedLineWatts = 0;
            console.log(line);

            if (this.totalMegaWatt > 0) {
                if (line.maxPower <= this.totalMegaWatt) {
                    usedLineWatts = line.maxPower;
                } else {
                    usedLineWatts = this.totalMegaWatt;
                }

                res += `Line: ${line.name},total mega watt to sell ${usedLineWatts}, price per megaWatt: ${line.price}, total price (sell) ${
                    line.price * usedLineWatts
                }  max power: ${
                    line.maxPower
                }\n`;

                this.totalMegaWatt -= usedLineWatts;
                totalLinePower += usedLineWatts;

            } else {
                const extraWatts = Math.abs(this.totalMegaWatt);

                if (line.maxPower >= extraWatts) {
                    usedLineWatts =  extraWatts;
                } else {
                    usedLineWatts = line.maxPower;
                }
                res += `Line: ${line.name}, total mega watts to buy ${usedLineWatts}, price per megaWatt: ${line.price}, total price (buy) ${
                    line.price * usedLineWatts
                } max power: ${
                    line.maxPower
                }\n`;
                this.totalMegaWatt += usedLineWatts;
                totalLinePower -= usedLineWatts;
            }

        });
        res += `Total line used power: ${totalLinePower}\n`;

        if(this.totalMegaWatt !==0) {
            res += `You need/have extra ${this.totalMegaWatt} mega watts`
        }
        return res;
    }
}

let solar1 = new SolarPanel("panel1", 3);
let solar2 = new SolarPanel("panel2", 4);
let powerPlant = new PowerPlant("powerPlant", 100);

let house1 = new Consumer("23 House", 22);

let electricityLine = new ElectricityLine("first", 150, 4.5);
let electricityLine2 = new ElectricityLine("second", 100, 10.5);

let city = new City(
    "Springfield",
    false,
    [solar1, solar2, powerPlant],
    [house1],
    [electricityLine, electricityLine2]
);

console.log(city.getInfo());
