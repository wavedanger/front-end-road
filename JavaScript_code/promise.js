let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    var num = Math.ceil(Math.random() * 10)
    if (num <= 5) {
      resolve(num)
    } else {
      reject("数字太大了哟！")
    }
  }, 2000);
})
p.then((data) => {
  console.log(data)
}).catch((err) => {
  console.log(err)
})