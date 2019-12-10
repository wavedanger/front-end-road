// 随机排序
function randomSort(arr) {
  let newArr = [];
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    let randIndex = Math.floor(Math.random() * arr.length)
    newArr[i] = arr[randIndex]
    arr.splice(randIndex, 1)
  }
  return newArr
}

arr.sort(() => Math.random() - 0.5)//最后一项占比较小
// 冒泡排序
function bubbleSort(arr) {
  let length = arr.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}

// 选择排序
function selectSort(arr) {
  let length = arr.length;
  let minIndex = 0;
  for (let i = 0; i < length - 1; i++) {
    minIndex = i
    for (let j = i + 1; j < length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  return arr
}

// 插入排序
function insertSort(arr) {
  let length = arr.length;
  for (let i = 1; i < length; i++) {
    let key = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = key
  }
  return arr
}

// 快速排序
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  let markIndex = Math.floor(arr.length / 2)
  let mark = arr.splice(markIndex, 1)[0]
  let left = []
  let right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < mark) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([mark], quickSort(right))
}