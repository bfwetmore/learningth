function executeCallback(callback) {
    callback();
}

executeCallback(() => console.log('Hello'));

function sayGoodbye(callback) {
    callback();
}

sayGoodbye(() => console.log('Goodbye'));

