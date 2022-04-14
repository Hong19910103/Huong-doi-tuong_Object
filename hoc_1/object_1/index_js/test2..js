// function creatNewObject(name) {
//     let Obj = {};
//     Obj.name = name;
//     Obj.greeting = function () {
//         alert("hi I'm " + this.name + '.');
//     };
//     return Obj;
//
// }
//
// let hong = creatNewObject("hong");
// console.log(hong.name);
// console.log(hong.greeting()
// );
function Person(name){
    this.name=name;
    this.greeting=function (){
        alert("hi I'm "+this.name+'.');
    }
}
let per1= new Person('hong');
let per2= new Person("ngoc");
