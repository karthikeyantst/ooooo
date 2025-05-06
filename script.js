
function validateForm() {
    let isValid = true;

    document.getElementById('usernameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('passwordError').innerText = '';
    document.getElementById('addressError').innerText = '';
    document.getElementById('contactError').innerText = '';

    const username = document.getElementById('username').value;
    if (username === '') {
        document.getElementById('usernameError').innerText = 'Username is required.';
        isValid = false;
    }

   
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = 'Enter a valid email address.';
        isValid = false;
    }

  
    const password = document.getElementById('password').value;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordPattern.test(password)) {
        document.getElementById('passwordError').innerText = 'Password must be at least 8 characters long and contain both letters and numbers.';
        isValid = false;
    }


    const address = document.getElementById('address').value;
    if (address === '') {
        document.getElementById('addressError').innerText = 'Address/Message is required.';
        isValid = false;
    }

    const contact = document.getElementById('contact').value;
    const contactPattern = /^[0-9]{10}$/;
    if (!contactPattern.test(contact)) {
        document.getElementById('contactError').innerText = 'Contact number must be exactly 10 digits.';
        isValid = false;
    }

    return isValid;
}

  
