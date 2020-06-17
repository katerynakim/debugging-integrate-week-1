// fill in the blanks

console.log('--- loading: honesty test');

function honestyTestHandler() {
  'use strict';
  debugger;

  // read inputs from user
  const userString = prompt(`Please enter something:`);

  const confirmation = confirm(`Did you enter something? \nyes: "ok" \nno: "cancel"`);

  // before moving on ... type check!
  if (typeof userString !== 'string') { throw new TypeError(); }
  if (typeof confirmation !== 'boolean') { throw new TypeError(); }

  // perform core logic
  
  // true if the user input text, false if it is empty or null
  const didEnterSomething = userString ? true : false; 
  const isALiar = !confirmation === didEnterSomething;
  // display a different message depending on whether or not the user is a liar
  const message = `You are a ${isALiar ? 'liar!' : 'mensch'}!`;

  // alert result for the user
  alert(message);

  // log action for the developer
  console.log('\n--- honesty test ---');
  console.log('userString:', typeof userString, '\n', userString);
  console.log('didEnterSomething:', typeof didEnterSomething, '\n', didEnterSomething);
  console.log('message:', typeof message, '\n', message);

}
