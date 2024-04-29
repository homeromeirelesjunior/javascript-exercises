const palindromes = function (text) {
    let textPilha = [];
    let textInverso = '';
    
    let textStripped = text.replace(/[^A-Za-z0-9]/g, '');

    for (let i = 0; i < textStripped.length; i++) {
        textPilha.push(textStripped.charAt(i));
    }

    for (let i = textStripped.length; i > 0; i--) {
        textInverso += textPilha.pop();
    }

    return textStripped.toLowerCase() == textInverso.toLocaleLowerCase() ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
