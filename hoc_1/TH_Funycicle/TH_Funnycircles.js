class Funnycircles {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    drawcircles() { // vẽ hình tròn
        let paper = document.getElementById("myCanvas");
        let circle = paper.getContext("2d");
        circle.fillStyle="pink"; // chọn thuộc tính màu của hình trước khi vẽ
        circle.beginPath();
        circle.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        circle.fill();//thực thi hành động đổ màu khi vẽ xong
        circle.stroke();
    }

}

let x1 = Math.floor(Math.random() * 1000); // gán lại giá trị ban đầu thành vị trí ngẫu nhiên
let x2 = Math.floor(Math.random() * 1000);
let radius1 = Math.floor(Math.random() * 80);
let dish = new Funnycircles(x1,x2,radius1);
dish.drawcircles();//vẽ hình tròn theo giá trị ngẫu nhiên
