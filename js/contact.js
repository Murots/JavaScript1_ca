const form = document.querySelector("#contact-form");
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstName-error");
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastName-error");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");
const formMessage = document.querySelector("#message");
const formMessageError = document.querySelector("#message-error");
const address = document.querySelector("#address");
const addressError = document.querySelector("#address-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");

function validateForm() {
    event.preventDefault();

    if (checkLength(firstName.value, 0) === true) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }

    if (checkLength(lastName.value, 3) === true) {
        lastNameError.style.display = "none";
    } else {
        lastNameError.style.display = "block";
    }

    if (checkLength(subject.value, 9) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }
    
    if (checkLength(formMessage.value, 19) === true) {
        formMessageError.style.display = "none";
    } else {
        formMessageError.style.display = "block";
    }

    if (checkLength(address.value, 24) === true) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
} 

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}