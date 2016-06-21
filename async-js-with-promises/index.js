/*
Notes: Promise is basically just an objct with two functions
1: Then
2: Catch

* Still not compatible with all browsers
* Better to use libraries like q and async
* Great for getting rid of nesting  (i.e. callback hell)

COMPARISON

Before:
promise.then(function (bears) {
  console.log(bears);
  return fetch('fish.txt').then(function (fish) {
    console.log(fish);
  })
})
.catch( function (err) {
  console.log('We got error', err);
})

* VS *

After:
promise.then(function (bears) {
  console.log(bears);
  return fetch('fish.txt')
}).then(function (fish) {
  console.log(fish);
})
.catch( function (err) {
  console.log('We got error', err);
})

*/
// var promise = {
//   then: function () {},
//   catch: function() {}
// }
//
// var fetch = require('./fetch.js')
//
// var promise = fetch('bears.txt')
//
// promise.then(function (bears) {
//   console.log(bears);
//   return fetch('fish.txt')
// }).then(function (fish) {
//   console.log(fish);
// })
// .catch( function (err) {
//   console.log('We got error', err);
// })

//How to resolve multiple promises at once?

//Answer: Promise.all --Basically just an array of promises

// Promise.all([
//   fetch('bears.txt'),
//   fetch('fish.txt')
// ]).then(function (values) {
//   var bears = values[0];
//   var fish = values[1];
//   console.log(bears,fish);
// })

//How to create a new promise?

var promise = new Promise(function (resolve, reject) {
  //reject(new Error("uh oh"))
  resolve('all good')
})

promise.then(function (result) {
  console.log('was it all good', result);
}).catch(function (error) {
  console.log('ERR', error);
})
