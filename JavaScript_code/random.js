// rgb随机颜色
function rgbColor() {
  let r = Math.floor(Math.random() * 256)
  let g = Math.floor(Math.random() * 256)
  let b = Math.floor(Math.random() * 256)
  return `rgb(${r},${g},${b})`
}
// 十六进制随机颜色
function getRandomColor() {
  let color = Math.floor(Math.random() * parseInt('FFFFFF', 16)).toString(16)
  // 未足6位补0
  while (color.length < 6) {
    color = "0" + color
  }
  return '#' + color
}