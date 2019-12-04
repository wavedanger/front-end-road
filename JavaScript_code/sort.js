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