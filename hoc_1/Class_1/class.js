class People{                    //Khai báo lớp dùng ngoặc nhọn
    constructor(name,age,adress) { //
        this.name= name; // this chỉ thẳng đến giá trị cần tham chiếu
        this.age= age;
        this.adress= adress;
    }
    getName(){ // lấy giá trị để xem( sau khi sửa gọi lại hàm để xem giá trị sau thay đổi)
        return this.name;
    }
    getAge(){
        return this.age;
    }
    getAdress(){
        return this.adress;
    }
    setName(name){ // Lấy giá trị (name) sửa tham chiếu  giá trị sẽ thay đổi theo.
        this.name=name;

    }
    setAge(age){
        this.age=age;
    }
    setAdress(adr){
        this.adress=adr;
    }
}
 let asis= new People("hong",16,"haiDuong");

asis.setName("dung");
console.log(asis.getName());
asis.setAge(20);


