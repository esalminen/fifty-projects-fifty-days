// ********** VIDEO SOLUTION **********
const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')

let idx = 08

let interval = setInterval(run, 2000)

function run() {
  idx++
  changeImage()
}

function changeImage() {
  if (idx > img.length - 1) {
    idx = 0
  } else if (idx < 0) {
    idx = img.length - 1
  }

  imgs.style.transform = `translateX(${-idx * 500}px)`
}

function resetInterval() {
  clearInterval(interval)
  interval = setInterval(run,2000)
}

rightBtn.addEventListener('click', () => {
  idx++
  changeImage()
  resetInterval()
})

leftBtn.addEventListener('click', () => {
  idx--
  changeImage()
  resetInterval()
})

// ********** MY OWN SOLUTION **********
// const imageContainer = document.querySelector('.image-container');
// const imageContainerChilds = imageContainer.childElementCount
// const leftBtn = document.querySelector('#left')
// const rightBtn = document.querySelector('#right')

// let autoScrollOn = true
// let timeOutRef = null

// setInterval(() => {
//   if (autoScrollOn) {
//     moveToRight()
//   }
// }, 2000)

// let translateArray = []
// for (let index = 0; index < imageContainerChilds; index++) {
//   translateArray.push(0 + index * -500)
// }
// let imgIdx = 0

// rightBtn.addEventListener('click', () => {
//   disableAutoScroll()
//   moveToRight()
// })

// leftBtn.addEventListener('click', () => {
//   disableAutoScroll()
//   moveToLeft()
// })

// function disableAutoScroll() {
//   autoScrollOn = false
//   clearTimeout(timeOutRef)
//   timeOutRef = setTimeout(() => {
//     autoScrollOn = true
//   }, 5000)

// }

// function moveToRight() {
//   imgIdx++
//   if (imgIdx > imageContainerChilds - 1) {
//     imgIdx = 0
//   }
//   moveImage(imgIdx)
// }

// function moveToLeft() {
//   imgIdx--
//   if (imgIdx < 0) {
//     imgIdx = imageContainerChilds - 1
//   }
//   moveImage(imgIdx)
// }

// function moveImage(idx) {
//   imageContainer.style.transform = `translateX(${translateArray[idx]}px)`
// }
