const reverseString = (string) => {
    if (typeof string === 'string') {
        return string.split('').reverse().join('');
    }
    return 'Not a string'
    
}

export default reverseString;