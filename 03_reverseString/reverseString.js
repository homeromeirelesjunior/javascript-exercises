const reverseString = function(message) {
  let splitMessage = message.split('');

  let splitedMessage = splitMessage.reverse();

  let reversedMessage = splitedMessage.join('');

  return reversedMessage;
};

// Do not edit below this line
module.exports = reverseString;
