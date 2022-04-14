class Temperture {
    constructor(doc) {
        this.doC = doc;
    }

    convertCtoF() {
        return this.doC * (9 / 5) + 32;
    }

    convertCtoK() {
        return this.doC + 273.15;
    }
}

let doc1 = new Temperture(25);
console.log(doc1.convertCtoF());
console.log(doc1.convertCtoK());


