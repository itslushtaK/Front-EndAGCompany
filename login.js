const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
document.getElementById("demo")

form.addEventListener('submit', (e) => {
  let messages = []
  if(name.value.length<=6){
    messages.push('Emri duhet te kete 6 karaktere')
  }
  
  if (password.value.length <= 6) {
    messages.push('Fjalkalimi duhet te kete 6 ose me shume karaktere')
  }

  if (password.value.length >= 20) {
    messages.push('Fjalkalimi duhet te kete 20 ose me pake karaktere')
  }
  if (password.value.length >= 20) {
    alert('Fjalkalimi duhet te kete 20 ose me pake karaktere')
  }
  function myFunction() {
    alert('flm')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})

