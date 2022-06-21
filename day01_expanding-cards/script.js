// get all elements with panel class from html page in to panels variable
const panels = document.querySelectorAll('.panel')

// cycle panels through
panels.forEach(panel => {
    // add click event to each panel, which removes active class from all panels and adds
    // active class to the one that was clicked
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

const removeActiveClasses = () => {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}