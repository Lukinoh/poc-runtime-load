// import test from 'http://localhost:7000/file.js';
/* Add JavaScript code here! */

import('http://localhost:7000/file.js')
 .then(test => {
     console.log('blabla')
     console.log(test.default)
 })

console.log('Hello World! You did it! Welcome to Snowpack :D');
console.log('hello')
// console.log(test)