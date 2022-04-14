class Battery {
    constructor(energy) {
        this.energy = energy;
    }

    getEnergy() {
        return this.energy;
    }

    setEnergy(value) {
        this.energy = value;

    }

    decreaseEnergy() {
        if (this.energy > 0) {
            this.energy--;
        }
    }
}


class FlashLamp {
    constructor(battery) {
        this.battery = battery;
        this.status = true;
    }
    getBattery(){
        return this.battery;
    }

    setBattery() {
        return this.battery.getEnergy()

    }

    light() {
        if (this.status) {
            alert("den sang")
        } else {
            alert("den toi")
        }
    }

    turnOn() {
        this.status = true;
    }

    turnOff() {
        this.status = false;
    }

}

let battery = new Battery('5');
battery.setEnergy(10);
battery.decreaseEnergy();

let flashLamp = new FlashLamp('battery');
flashLamp.setBattery(battery);

document.write("thong tin pin:" +flashLamp.getBattery()+"<br/>");
flashLamp.light()
document.write("Bat den<br/>");
flashLamp.turnOn();
flashLamp.light();
document.write("thong tin pin:"+flashLamp.getBattery()+'<br/>');
document.write("tat di<br/>");
flashLamp.turnOff();
flashLamp.light();
