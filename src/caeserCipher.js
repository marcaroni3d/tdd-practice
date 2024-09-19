const caesarCipher = (string, shift) => {
    if (typeof string !== 'string') {
        return 'not a string';
    }

    shift = shift % 26;

    function shiftChar(char) {
        let charCode = char.charCodeAt(0);

        // Shift uppercase letters (A-Z)
        if (charCode >= 65 && charCode <= 90) {
            return String.fromCharCode(((charCode - 65 + shift + 26) % 26) + 65);
        }
      
        // Shift lowercase letters (a-z)
        else if (charCode >= 97 && charCode <= 122) {
            return String.fromCharCode(((charCode - 97 + shift + 26) % 26) + 97);
        }
      
      // Return non-alphabetic characters unchanged
      return char;
    }
  
    // Process the entire string and shift each character
    return string.split('').map(shiftChar).join('');
}

export default caesarCipher;