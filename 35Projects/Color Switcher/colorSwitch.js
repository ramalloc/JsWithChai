const buttons = document.querySelectorAll('.button');
// Now we need body to change the bg
const body = document.querySelector('body');

buttons.forEach(function (button) {
    // Now we will add an listner on button which is addEventListner() and it takes two argumnet 1st is event name and 2nd is 
    // callback function, Now when an event occurs it produces many information which comes with callback function like - 'e'
    button.addEventListener('click', function (e) {
        // console.log(e);
        // console.log(e.target);
        switch (e.target.id) {
            case "grey":
                body.style.backgroundColor = e.target.id;
                break;
            case "white":
                body.style.backgroundColor = e.target.id;
                break;
            case "blue":
                body.style.backgroundColor = e.target.id;
                break;
            case "yellow":
                body.style.backgroundColor = e.target.id;
                break;
            default:
                break;
        }

    })
})