// 节流 函数，延时，立即执行
function throttle(fn, wait, immediate) {
  let callnow = immediate
  let timer = null
  return function () {
    let args = arguments
    let context = this
    if (callnow) {
      fn.apply(context, args)
      callnow = false
    }
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(context, args)
        timer = null
      }, wait);
    }
  }
}