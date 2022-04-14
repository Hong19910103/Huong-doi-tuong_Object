class Rectangle {
    constructor(cd,cr) {
        this.cd=cd;
        this.cr=cr;

    }
    acreageRectangle(){
        return this.cd*this.cr;
    }
    perimeterRectangle(){
        return (this.cd+this.cr)*2;
    }
    drawCanvas(){
        let paper=document.getElementById("myCanvas");
        let ctx = paper.getContext("2d");
        ctx.beginPath()
        ctx.rect(20,20,this.cd,this.cr);
        // ctx.fillStyle="blue";
        ctx.stroke();
    }

}
let rec=new Rectangle("200","300")
rec.drawCanvas()
