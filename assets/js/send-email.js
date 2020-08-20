var submitButton = document.querySelector('#form-submition-btn');
var userId = "user_ZrCDK9sVX6AhOofUlACTB";

(() => {
    emailjs.init(userId);
})();

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    let contactForm = document.querySelector('#contact-form');
    emailjs.sendForm('gmail', 'contact_form', contactForm)
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        }, (error) => {
            console.log('FAIL...', error);
        });
});