class Date {
    constructor(day, month, year) {
        if (day <= 31 && day > 0) {
            this.day = day;
        } else {
            this.day = 1;
        }
        if (month < 13 && month > 0) {
            this.month = month;
        } else {
            this.month = 1;
        }
        if (year >= 1900 && year <= 9999) {
            this.year = year;
        } else {
            this.year = 1900;
        }
    }

    getDay() {
        return this.day;
    }

    getMonth() {
        return this.month;
    }

    getYear() {
        return this.year;
    }

    setDay(day) {
        this.day = day;
    }

    setMonth(month) {
        this.month = month;
    }

    setYear(year) {
        this.year = year;
    }
}

let date = new Date(5, 5, 2005)
console.log(date.getDay());
date.setDay(2);
date.setMonth(2);
date.setYear(2002);
console.log(date);
let date1=new Date(4344,444,4546565,)
console.log(date1.getDay());

// let d= new Date() -> tạo đối tượng date với thời gian hiện tại
// let d= new Date(miliseconds) -> tạo đối tượng date với thời gian truyền vào tính bằng miliseconds;
// let d= new Date(datestring)-> tạo đối tựng date với tham số truyền vào là tham số datestring(chuỗi ngày tháng năm)
// let d=  new Date( year,month,day,hour,minute,seconds,miliseconds)-> tạo đối tựng date là các tham số truyền vào tương ứng
