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