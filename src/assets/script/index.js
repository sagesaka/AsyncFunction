console.log('読み込み完了！')

const promiseObj = new Promise(resolve => {
  setTimeout(() => {
    resolve('これは成功したプロミスオブジェクトです')
  }, 50)
})
console.log(promiseObj)