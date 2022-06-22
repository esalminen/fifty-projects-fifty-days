const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value)

  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = ''
    }, 10)
    randomSelect()
  }
})

function createTags(input) {
  // Trim spaces and empty strings from tagslist
  const tags = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim())

  // Clear tags
  tagsEl.innerHTML = ''

  // Create tag for each string on the list and append it to the tag element list
  tags.forEach((tag) => {
    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')
    tagEl.innerText = tag
    tagsEl.appendChild(tagEl)
  })
}

function randomSelect() {
  const times = 30
  const intervalMs = 100

  // Start interval timer with intervalMs value
  const interval = setInterval(() => {
    const randomTag = pickRandomTag()
    highlightTag(randomTag)

    // Start timeout for un-highlightning tag after highlightning it
    setTimeout(() => {
      unHighlightTag(randomTag)
    }, intervalMs)
  }, intervalMs)

  // Finishing timeout is set after times * intervalMs milliseconds has passed
  setTimeout(() => {
    clearInterval(interval)

    setTimeout(() => {
      const randomTag = pickRandomTag()
      highlightTag(randomTag)
    }, intervalMs)
  }, times * intervalMs)
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag')
  return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
  tag.classList.add('highlight')
}

function unHighlightTag(tag) {
  tag.classList.remove('highlight')
}
