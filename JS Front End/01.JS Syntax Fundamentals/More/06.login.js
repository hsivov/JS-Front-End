function login(input) {

    let username = input[0];

    for (let i = 1; i <= 4; i++) {
        let password = input[i];
        let reversed = reverseString(username);

        if (reversed === password) {
            return `User ${username} logged in.`;
        }
        if (i === 4) {
            return `User ${username} blocked!`;
        }
        console.log('Incorrect password. Try again.');
    }

    function reverseString(str) {
        return str.split('').reverse().join('');
    }
}

console.log(
    login(['Acer','login','go','let me in','recA'])
);

console.log(
    login(['sunny','rainy','cloudy','sunny','not sunny'])
);