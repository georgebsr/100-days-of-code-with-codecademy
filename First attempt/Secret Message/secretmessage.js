let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop(); //remove last string of the array
console.log(secretMessage.length);

secretMessage.push('to', 'Program'); //add string to the array

secretMessage[7] = 'right'; //replace array element

secretMessage.shift(); //remove first index of the array

secretMessage.unshift('Programming'); //add to the beginning of the array

secretMessage.splice(6, 11, 'know'); //replace indexes of the array

console.log(secretMessage.join(' '));
