// 获取url参数
function getUrlParams(url) {
  url = url ? url : window.location.search
  let obj = {}
  if (url.indexOf("?") != -1) {
    let arr = url.split("?")[1].split("&")//[key=val,key2=val2,...]
    arr.forEach((value) => {
      obj[value.split("=")[0]] = unescape(value.split("=")[1])
    })
  }
  return obj
}
const testurl = "https://www.google.com/search?biw=1280&bih=609&ei=PXvoXYbHMenUmAX4nZDAAQ&q=format&oq=format&gs_l=psy-ab"
console.log(getUrlParams(testurl))