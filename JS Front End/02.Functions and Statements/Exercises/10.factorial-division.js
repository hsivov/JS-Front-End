function factotialDivision(firstNum, secondNum) {

    function getFactorial(num) {
        if (num === 1) {
            return num;
        }
        return num * getFactorial(num - 1);
    }

    console.log(getFactorial(firstNum) / getFactorial(secondNum));
}

factotialDivision(6, 2);