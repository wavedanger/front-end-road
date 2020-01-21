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
//es2020
Function.prototype.myApply = function (context) {
  context = (context ?? window) || new Object(context)
  const key = Symbol()
  const args = arguments[1]
  context[key] = this
  let result
  if (args) {
    result = context[key](...args)
  } else {
    result = context[key]
  }
  delete context[key]
  return result
}
