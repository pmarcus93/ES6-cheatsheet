/* ES6 Cheatsheet
Based on You Don't Know Javascript - ES6 & Beyond
by Kyle Simpson (@getify)
https://github.com/getify/You-Dont-Know-JS

This file contains short snippets and explanations of ES6 code. */


/***** SCOPE *****/

// Block Scope
/* Creates a new 'child scope' inside the current one.
Works just like an IIFE. */

let a = 'External';

{
  let a = 'Internal';
  console.log(a); //Internal
}

console.log(a); //External


/***** DECLARATIONS *****/

// let Declarations
/* Because let declarations only initializes when they appear in the
scope block, it's a valid approach to declare them
on the first lines. */

{
  let a = 'a', b = 'b', c = 'c';
}


// const Declarations (Constants)
/* Constant declarations has to have an explicit initialization.
Constants doesn't restrict the value itself, only the assignment of it.
If the value is complex such as and array or object,
you can still modify them. */

{
  const name = 'Marcus', lastName = 'Pereira';
  name = 'João'; // TypeError
}
