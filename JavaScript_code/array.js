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

// 最大值
var arr = [1, 2, 3, 4]
var max = Math.max(...arr)
var max = Math.max.apply(arr)
var max = arr.reduce((prev, cur) => {
  return Math.max(prev, cur)
})
console.log(max)

// 求和
var arr = [1, 2, 3, 4]
var sum = arr.reduce((prev, cur) => {
  return prev + cur
})
console.log(sum)
var sumf = function (arr) {
  var len = arr.length
  if (len == 0) {
    return 0
  } else if (len == 1) {
    return arr[0]
  } else {
    return arr[0] + sumf(arr.slice(1))
  }
}
console.log(sumf(arr))

// 合并
var arr = [1, 2, 3, 4]
var arr2 = [5, 6]
console.log(arr.concat(arr2))//"[1, 2, 3, 4, 5, 6]"
console.log([...arr, ...arr2])//"[1, 2, 3, 4, 5, 6]"
Array.prototype.push.apply(arr, arr2)
console.log(arr)//"[1, 2, 3, 4, 5, 6]"
arr2.map(item => {
  arr.push(item)
})
console.log(arr)//"[1, 2, 3, 4, 5, 6, 5, 6]"

// 设置每一项的值
var arr = [1, 2, 3]
arr.fill(true)
console.log(arr)
var arr2 = arr.map(() => 0)
console.log(arr2)

// 判断是否包含值
var arr = [1, 2, 3]
arr.indexOf(4)//-1
arr.includes(4)//false
arr.find((item) => item === 3)//3
arr.findIndex((item) => item === 3)//2
arr.some(item => {
  return item === 3
})//true