const calculator = {
    add: function(a, b) {
        if (isValidArguments(a, b)) {
            return a + b;
        }
        return 'Arguments contain a non-number'
    },

    subtract: function(a, b) {
        if (isValidArguments(a, b)) {
            return a - b;
        }
        return 'Arguments contain a non-number'
    },

    multiply: function(a, b) {
        if (isValidArguments(a, b)) {
            return a * b;
        }
        return 'Arguments contain a non-number'
    },

    divide: function(a, b) {
        if (isValidArguments(a, b)) {
            if (b === 0) {
                return 'Error: Division by zero is undefined';
            }
            return a / b;
        }
        return 'Arguments contain a non-number'
    }
}

const isValidArguments = (x, y) => {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    } else {
        return true;
    }
}

export default calculator;