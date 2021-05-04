const search = document.querySelector('.search')
const textInput = document.querySelector('.textInput')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
  search.classList.toggle('active')
  textInput.focus()
})
