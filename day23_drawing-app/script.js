const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const increaseBtn = document.getElementById('increase')
const decreaseBtn = document.getElementById('decrease')
const clearBtn = document.getElementById('clear')
const sizeSpan = document.getElementById('size')
const colorInput = document.getElementById('color')

increaseBtn.addEventListener('click', increaseSize)
decreaseBtn.addEventListener('click', decreaseSize)
clearBtn.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
})
colorInput.addEventListener('change', (e) => {
  color = e.target.value
})

let size = 20
let isPressed = false
let color = 'black'
let x
let y

canvas.addEventListener('mousedown', (e) => {
  isPressed = true
  x = e.offsetX
  y = e.offsetY
})

canvas.addEventListener('mouseup', (e) => {
  isPressed = false
  x = undefined
  y = undefined
})

canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
    const x2 = e.offsetX
    const y2 = e.offsetY

    drawCircle(x2, y2)
    drawLine(x, y, x2, y2)

    x = x2
    y = y2
  }
})

function drawCircle(x, y) {
  ctx.beginPath()
  ctx.arc(x, y, size, 0, Math.PI * 2)
  ctx.fillStyle = color
  ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.strokeStyle = color
  ctx.lineWidth = size * 2
  ctx.stroke()
}

function decreaseSize() {
  size -= 5
  if (size < 5) {
    size = 5
  }
  updateSizeSpan(size)
}

function increaseSize() {
  size += 5
  if (size > 40) {
    size = 40
  }
  updateSizeSpan(size)
}

function updateSizeSpan(size) {
  sizeSpan.innerText = size
}
