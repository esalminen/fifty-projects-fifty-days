const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for (const empty of empties) {
  empty.addEventListener('dragover', dragOver)
  empty.addEventListener('dragenter', dragEnter)
  empty.addEventListener('dragleave', dragLeave)
  empty.addEventListener('drop', dragDrop)
}

function dragStart() {
  this.className += ' hold'
  setTimeout(() => (this.className = 'invisible'), 0)

  console.log('drag start')
}
function dragEnd() {
  this.className = 'fill'
}
function dragOver(e) {
  e.preventDefault()
}
function dragEnter(e) {
  console.log('dragged to', this.className)
  e.preventDefault()
  this.className += ' hovered'
}
function dragLeave() {
  this.className = 'empty'
}
function dragDrop() {
  this.className = 'empty'
  this.append(fill)
}
