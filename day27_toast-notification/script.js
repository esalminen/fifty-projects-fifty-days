const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
  'Tämä on ilmoitus',
  'Toka ilmoitus',
  'Virhe!',
  'Oletko varma mitä olet tekemässä'
]

const messageTypes = [
  'info',
  'success',
  'error'
]

button.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null) {

  const toast = document.createElement('div')
  toast.classList.add('toast')
  toast.classList.add(type ? type : messageTypes[Math.floor(Math.random() * messageTypes.length)])
  toast.innerText = message ? message : messages[Math.floor(Math.random() * messages.length)]

  toasts.appendChild(toast)
  setTimeout(() =>{
    toast.remove()
  }, 3000)
}