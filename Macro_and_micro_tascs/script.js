'use strict';

setTimeout(() => console.log('timeout'));

Promise.resolve()
.then(() => console.log('promise'));

queueMicrotask(() => console.log('message'));

Promise.resolve()
.then(() => console.log('promise_2'));

console.log('code');

//() => {} macrotasc
//microtask: then/catch/finally/await
//render
//() => {} macrotasc
//microtask: then/catch/finally/await
//render
//() => {} macrotasc