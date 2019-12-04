// 二分法查找-非递归
function binary_search(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (arr[mid] < target) {
      left = mid + 1
    } else if (arr[mid] > target) {
      right = mid - 1
    } else {
      return mid
    }
  }
  return -1;
}
// 二分法查找-递归
function binary_search_Recursive(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1
  }
  var mid = Math.floor((left + right) / 2)
  if (target == arr[mid]) {
    return mid
  }
  else if (target < arr[mid]) {
    return binary_search(arr, target, left, mid - 1)
  } else if (target > arr[mid]) {
    return binary_search(arr, target, mid + 1, right)
  }
}