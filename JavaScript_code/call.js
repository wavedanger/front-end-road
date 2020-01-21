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
// es2020
Function.prototype.myCall = function (context, ...args) {
  context = (context ?? window) || new Object(context)
  const key = Symbol()
  context[key] = this
  const result = context[key](...args)
  delete context[key]
  return result
}

