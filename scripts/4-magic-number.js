// fix the bugs

console.log('--- loading: magic number');

function magicNumberHandler() {
  'use strict';
  debugger;

  // read inputs from user
  const faveNumber = prompt(`What's your favorite number?`);
  const birthDate = prompt('On which date were you born?');

  // before moving on ... type check!
  if (typeof faveNumber !== 'string') { throw new TypeError(); }
  if (typeof birthDate !== 'string') { throw new TypeError(); }

  // perform core logic
  const magicNumber = Math.abs(faveNumber - birthDate);
  const message = `your magic number is : ` + magicNumber ;

  // alert result for the user
  alert(message);

  // log action for the developer
  console.log('\n--- magic number ---');
  console.log('faveNumber:', typeof faveNumber, '\n', faveNumber);
  console.log('birthDate:', typeof birthDate, '\n', birthDate);
  console.log('magicNumber:', typeof magicNumber, '\n', magicNumber);
  console.log('message:', typeof message, '\n', message);

}