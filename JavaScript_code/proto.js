// 原型链
var F = function () { };

Object.prototype.a = function () {
  console.log('a');
};

Function.prototype.b = function () {
  console.log('b');
}

var f = new F();
console.log(f.__proto__ === F.prototype)//true
console.log(F.prototype.__proto__ === Object.prototype)//true
console.log(Object.prototype.__proto__ === null)//true
f.a();//"a"
f.b();//"TypeError: f.b is not a function"
console.log("---------------------")
console.log(F.__proto__ === Function.prototype)//true
console.log(Function.prototype.__proto__ === Object.prototype)//true
console.log(Object.prototype.__proto__ === null)//true
F.a();//"a"
F.b();//"b"
