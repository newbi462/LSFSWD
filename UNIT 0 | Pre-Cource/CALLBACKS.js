/*CALLBACKS: A very important concept in Javascript is the ability to pass a function as an arguments to another function. These functions are called callbacks. These functions can be called anytime and passed arguments within the function. We will soon discover why callbacks are so important to Javascript. Convention is to use the callback or cb argument variable as your callback, although as always you are free to name them what you please.*/
function saysHelloToUser(user) {
  return ‘Hello ’ + user + ‘!’;
}

function saysGoodbyeToUser(user) {
  return 'Goodbye ' + user + '!';
}

function createGreeting(user, cb) {
  return cb(user);
}

createGreeting('Dan', saysHelloToUser); // 'Hello Dan!'
createGreeting('Dan', saysGoodbyeToUser); // 'Goodbye Dan!'
/*Within createGreeting we have set the parameter cb to equal whatever was passed in as the second argument.
In the above example we see that in the first createGreeting call, the function saysHelloToUser was passed as the second argument. This gives us the ability to call cb (which is equal to the function saysHelloToUser) within the createGreeting function.*/
