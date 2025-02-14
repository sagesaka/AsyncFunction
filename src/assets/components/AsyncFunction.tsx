const AsyncFunction = () => {

// Promise の練習
// 2秒後に'完了'を返すPromise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('完了')
  }, 2000)
})


  return (
    <div>

    </div>
  )
}

export default AsyncFunction;