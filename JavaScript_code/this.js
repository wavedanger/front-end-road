// 关于this指向经典的代码题
// https://github.com/YvetteLau/Blog/issues/6
var number = 5;
var obj = {
  number: 3,
  fn: (function () {
    var number;
    this.number *= 2;
    number = number * 2;
    number = 3;
    return function () {
      var num = this.number;
      this.number *= 2;
      console.log(num);
      number *= 3;
      console.log(number);
    }
  })()
}
var myFun = obj.fn;
myFun.call(null);//10,9
obj.fn();//3,27
console.log(window.number);//20