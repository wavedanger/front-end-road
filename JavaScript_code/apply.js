// es3
Function.prototype.myapply = function (context, arr) {
  context = context || window
  context.fn = this
  var result
  if (!arr) {
    result = context.fn()
  } else {
    var args = []
    for (var i = 0; i < arr.length; i++) {
      args.push("arr[" + i + "]")
    }
    result = eval("context.fn(" + args + ")")
  }
  delete context.fn
  return result
}
// es6
Function.prototype.myapply = function (context, arr) {
  context = context || window
  context.fn = this
  let result
  if (!arr) {
    result = context.fn()
  } else {
    result = context.fn(...arr)
  }
  delete context.fn
  return result
}