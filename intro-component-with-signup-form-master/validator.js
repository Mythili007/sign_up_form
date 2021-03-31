function validateEmail(input) {
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!input.value.match(emailRegex)) {
        alert("Please enter valid email address");
        document.form.email_text.focus();
        return false;
    }
}