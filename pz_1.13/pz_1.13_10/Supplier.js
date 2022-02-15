class Supplier {
    constructor(name, dayPower, nightPower) {
        this.name = name;
        this.dayPower = dayPower;
        this.nightPower = nightPower;
    }

    getPower(isDay) {
        return isDay ? dayPower : nightPower;
    }
}

class PowerPlant extends Supplier {
    constructor(name, dayPower, nightPower) {
        super(name, dayPower, nightPower);
    }
}

class SolarPanel extends Supplier {
    constructor(name, dayPower, nightPower) {
        super(name, dayPower, nightPower);
    }
}

export { PowerPlant, SolarPanel };
// export default Supplier;
