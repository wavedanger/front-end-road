// 防抖 函数，延时，立即执行
function debounce(fn, wait, immediate) {
  let timer = null
  return function () {
    let args = arguments
    let context = this
    if (immediate && !timer) {
      fn.apply(context, args)
    }
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, wait);
  }
}