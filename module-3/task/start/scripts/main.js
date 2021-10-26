calculator = (num1, num2, operator) => {
    let rslt;
    switch(operator) {
        case '+':
            rslt = num1 + num2;
            return rslt;
            break;
        case '-':
            rslt = num1 - num2;
            return rslt;
            break;
        case '*':
            rslt = num1 * num2;
            return rslt;
            break;
        default:
            return 'The operator you chose is invalid!';
            break;
    }

}

console.log(calculator(1, 1, '?'));
