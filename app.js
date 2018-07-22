// UI items
const nameEl = document.getElementById('name');
const zipcodeEl = document.getElementById('zipcode');
const emailEl = document.getElementById('email');
const phoneEl = document.getElementById('phone'); 

// Listeners
nameEl.addEventListener('blur', validateName);
zipcodeEl.addEventListener('blur', validateZipcode);
emailEl.addEventListener('blur', validateEmail);
phoneEl.addEventListener('blur', validatePhone);

// Validation
function validateName() {
    const re = /^[a-zA-Z]{2,10}$/;

    if(!re.test(nameEl.value)) {
        nameEl.classList.add('is-invalid');
    } else {
        nameEl.classList.remove('is-invalid');
    }

}

function validateZipcode() {
    const re = /^[0-9]{5}$/;

    if(!re.test(zipcodeEl.value)) {
        zipcodeEl.classList.add('is-invalid');
    } else {
        zipcodeEl.classList.remove('is-invalid');
    }

}

function validateEmail() {
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z_\-\.]+).([a-zA-Z]{2,5})$/;

    if(!re.test(emailEl.value)) {
        emailEl.classList.add('is-invalid');
    } else {
        emailEl.classList.remove('is-invalid');
    }

}

function validatePhone() {
    const re = /^[\+?\d{2}]?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{2}[- ]?\d{2}$/;

    if(!re.test(phoneEl.value)) {
        phoneEl.classList.add('is-invalid');
    } else {
        phoneEl.classList.remove('is-invalid');
    }  
}