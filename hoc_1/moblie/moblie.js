class Mobile { // khởi tạo đối tượng
    constructor(name) {
        this.name = name;
        this.battery = 100;
        this.inbox = [];
        this.outbox = [];
        this.message = "";
        this.status = false;
    }


    writeMessage(text) {
        this.message = text;
        this.battery--;

    }
    checkBattery(){
        this.battery=100;


    }

    turnOn() {
        this.status = true;
        this.battery--;
    }

    turnOff() {
        this.status = false;
        this.battery--;
    }

    sentMessage(phone) {
        if (this.status===true){
            this.outbox.push(this.message);
            phone.inbox.push(this.message);
            this.batery--;
        }else{
            console.log("hay bat nguon")
        }

    }
}

let samsung = new Mobile("Samsung");
let iphone = new Mobile('Iphone');

samsung.turnOn()
iphone.turnOn()
iphone.writeMessage("xinchao");
iphone.sentMessage(samsung);

console.log(iphone.outbox);

samsung.writeMessage("hi");
samsung.sentMessage(iphone);
console.log(iphone.inbox);
console.log(samsung.inbox);



