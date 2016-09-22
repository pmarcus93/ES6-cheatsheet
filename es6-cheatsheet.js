/* ES6 Cheatsheet
Based on You Don't Know Javascript - ES6 & Beyond
by Kyle Simpson (@getify)
https://github.com/getify/You-Dont-Know-JS

This file contains short snippets and explanations of ES6 code,
extracted from the book.*/


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


/***** OPERATORS *****/

// Spread / Rest (Operator ...)

// Spread
/* The operator ... can be used to spread/expand values from iterables (such
as an array). */

{

  let numbers = [12, 19, 14];

  function foo(x, y, z) {
    console.log(x, y, z);
  }

  foo(...numbers); // 12 19 14

}

/* It can be used to expand other values as well
(such as inside another array declaration).*/

{

  let someCharacters = ['Lara Croft', 'Kirby', 'Alan Wake'];
  let allCharacters = ['Sonic', ...someCharacters, 'Mario', 'Link'];
  console.log(allCharacters); //Sonic,Lara Croft,Kirby,Alan Wake,Mario,Link

}

// Rest
/* The operator ... can be used to gather non-named arguments ('the rest')in
a function declaration. Useful in cases that you don't know the exact number
of params that the function will gonna receive. Provides a solid alternative
to using the deprecated arguments array. */

{
  function logMyArguments(...args) {
    console.log(args);
  }

  logMyArguments('Milkshake', 'Burger', 'Fries', 'Coke');//Milkshake,Burger,Fries,Coke

}
