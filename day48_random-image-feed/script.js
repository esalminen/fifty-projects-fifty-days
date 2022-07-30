const URL_FETCH_STRING = 'https://source.unsplash.com/random/'
const container = document.querySelector('.container')
const rows = 10

for (let i = 0;i < rows * 3; i++) {
  const img = document.createElement('img')
  img.src = `${URL_FETCH_STRING}${getRandomSize()}`
  container.appendChild(img)
}

function getRandomSize() {
  return `${getRandomNr()}x${getRandomNr()}`
}

function getRandomNr() {
  return Math.floor(Math.random() * rows) + 300
}