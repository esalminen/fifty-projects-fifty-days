const counters = document.querySelectorAll('.counter')

counters.forEach((counter) => {
  counter.innerText = '0'

  const updateCounter = () => {
    // + is a fast way to convert string to number (are there any side effetcs??)
    // We could also use Number(counter.getAttribute('data-target))
    const target = +counter.getAttribute('data-target')
    const c = +counter.innerText

    const increment = target / 200

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`
      setTimeout(updateCounter, 1) // Recursive call with timeout to make counters counting effect
    } else {
      counter.innerText = target
    }
  }

  updateCounter()
})
