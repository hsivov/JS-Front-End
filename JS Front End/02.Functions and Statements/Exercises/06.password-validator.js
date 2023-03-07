function passwordValidator(password) {

    let isValid = true;
    const isValidLength = (pass) => pass.length >= 6 && pass.length <= 10;
    const hasOnlyDigitsAndLetters = (pass) => /^[A-Za-z0-9]+$/g.test(pass);
    const hasAtLeastTwoDigits = (pass) => [...pass.matchAll(/\d/g)].length >= 2;

    if (!isValidLength(password)) {
        console.log('Password must be between 6 and 10 characters');
        isValid = false;
    }

    if (!hasOnlyDigitsAndLetters(password)) {
        console.log('Password must consist only of letters and digits');
        isValid = false;
    }

    if (!hasAtLeastTwoDigits(password)) {
        console.log('Password must have at least 2 digits');
        isValid = false;
    }

    if (isValid) {
        console.log('Password is valid');
    }
}

passwordValidator('MyPass123');