class SanPham{
    constructor(name,authort,price,weight,brand) {

        this._name = name;
        this._authort = authort;
        this._price = price;
        this._weight = weight;
        this._brand = brand;
    }
    getname() {
        return this._name;
    }

    setname(value) {
        this._name = value;
    }

    getauthort() {
        return this._authort;
    }

    setauthort(value) {
        this._authort = value;
    }

    getprice() {
        return this._price;
    }

    setprice(value) {
        this._price = value;
    }

    getweight() {
        return this._weight;
    }

    setweight(value) {
        this._weight = value;
    }

    getbrand() {
        return this._brand;
    }

    setbrand(value) {
        this._brand = value;
    }
    addNewSp(){

    }
}