const scriptURL = 'https://script.google.com/macros/s/AKfycby11nbO8hbioOgF69B6udwoVrCvhbGtaQ8F5QbTISsl_yQAv8IAIlzlP4IIiVapUTg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})