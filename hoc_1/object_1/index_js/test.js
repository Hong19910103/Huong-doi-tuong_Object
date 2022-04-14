let object={
    name:"Hong",
    age: 32,
    adress:"Hai Duong"

}
let aray=[2,3,4,45,6,7,8,56]
// khi lấy giá trị của object phải tạo biến chứa giá trị cần lấy hoặc
let name=object[name]
console.log(name)
if (object.name==="Hong"){// có thể lấy giá trị của object so sánh trực tiếp
    console.log("hong") ;
}

object.age=50; // gán lại giá trị phần tử trong object.
console.log(object)
let a=aray[0];
console.log(a)
