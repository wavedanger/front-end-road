// 判断数组
function judge(arr) {
  console.log(Array.isArray(arr))
  console.log(arr instanceof Array)
  console.log(Object.prototype.toString.call(arr) === "[object Array]")
  console.log(arr.constructor === Array)
}
// 类数组转换
Array.prototype.slice.call(arrayLike)
Array.from(arrayLike)
// [...arrayLike]

// 数组去重
var arr = [1, 1, 'true', 'true', true, true, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, {}];
// ES6 Set
function unique(arr) {
  return Array.from(new Set(arr))
  // return [...new Set(arr)]
}
// ES5 两层for+splice
function unique(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1)
        j--
      }
    }
  }
  return arr
}
//indexof
function unique(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) == -1) {
      newArr.push(arr[i])
    }
  }
  return newArr
}
//sort
function unique(arr) {
  arr.sort()
  let newArr = [arr[0]]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      newArr.push(arr[i])
    }
  }
  return newArr
}
//includes
function unique(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i])
    }
  }
  return newArr
}
//filter+indexOf
function unique(arr) {
  return arr.filter((value, index) => {
    return arr.indexOf(value) === index
  })
}