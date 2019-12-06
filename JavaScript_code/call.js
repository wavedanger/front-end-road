// es3
Function.prototype.mycall = function (context) {
  context = context || window
  context.fn = this
  var args = []
  for (let i = 1; i < arguments.length; i++) {
    args.push('arguments[' + i + ']')
  }
  var result = eval("context.fn(" + args + ")")
  delete context.fn
  return result
}
// es6
Function.prototype.mycall = function (context) {
  context = context || window
  context.fn = this
  let args = [...arguments].slice(1)
  let result = context.fn(...args)
  delete context.fn
  return result
}
