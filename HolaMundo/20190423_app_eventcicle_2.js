console.log('Start Program');

setTimeout( function () {
    console.log('First TimeOut')
}, 3000);

setTimeout(function () {
    console.log('Second TimeOut')
}, 0);

setTimeout(function () {
    console.log('Third TimeOut')
}, 0);

console.log('Finish Program');
