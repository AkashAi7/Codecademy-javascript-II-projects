let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
secretMessage.pop();
console.log(secretMessage);
console.log('length of the array '+secretMessage.length);
secretMessage.push('to');
secretMessage.push('Program');
console.log(secretMessage);

console.log(secretMessage.indexOf("easily"));
/*Change the word easily to the word right by accessing the index and replacing it */
secretMessage[7]='right';
/**Use an array method to remove the first string of the array. */
secretMessage.shift();
console.log(secretMessage);
/*
Use an array method to add the string Programming to the beginning of the array. */
secretMessage.unshift('Programming');
/*
Use an array method to remove the strings get, right, the, first, time,, and replace them with the single string know,. */
secretMessage.splice(6,4, 'know');

/*
On one line, use console.log() and .join() to print the secret message as a sentence. */
console.log(secretMessage.join(' '));
