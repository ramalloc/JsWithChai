// Now below we have to select the form to catch the submit event
const form = document.querySelector('form');
// Now the form is submitting anywhere therefore we have to stop it to redirect anywhere therefore we do preventDeffault
// For that we have method on event

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Now we will select height and weight
    // We can get the values before submitting the form but initially they are empty as script runs therefore we are getting the values
    // after form submission 
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result');

    // calculating bmi
    const bmi = (weight / ((height * height) / 10000)).toFixed(2)

    // adding the bmi into result
    result.innerHTML = `<span>${bmi}</span>`
    })