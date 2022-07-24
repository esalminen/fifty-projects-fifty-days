// ********** COURSE SOLUTION ************
const password = document.getElementById('password')
const background = document.getElementById('background')

password.addEventListener('input', (e) => {
  const input = e.target.value
  const length = input.length
  const blurValue = 20 - length * 2
  background.style.filter = `blur(${blurValue}px)`
})

// ********** MY SOLUTION ****************
// const passwordEl = document.getElementById('password')
// const backgroundEl = document.getElementById('background')
// const submitBtnEl = document.getElementById('submitBtn')

// passwordEl.addEventListener('input', refreshBlur)
// submitBtnEl.addEventListener('click', () => {
//   passwordEl.value = ''
//   refreshBlur()
// })

// function refreshBlur() {
//   const pwLength = passwordEl.value.length > 20 ? 20 : passwordEl.value.length
//   backgroundEl.style.filter = `blur(${20-pwLength}px)`
// }