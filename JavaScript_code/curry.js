// 柯里化
function curryIt(fn) {
  var length = fn.length
  var args = []
  var result = function (arg) {
    console.log(arg)
    args.push(arg)
    length--
    if (length <= 0) {
      return fn.apply(this, args)
    } else {
      return result
    }
  }
  return result
}
var fn = function (a, b, c) { return a + b + c };
curryIt(fn)(1)(2)(3);//6