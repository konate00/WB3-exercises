"use strict";

// WB3, Exo #1 p33(1-29)

function test1() {
  let a = 10;
  if (a > 5) {
  a = 7; }
  console.log("a = " + a);
}
test1(); // a = 7

function test2A() {
    if (1 == 1) {
      var a = 5;
  }
    console.log("a = " + a);
  }
  test2A(); // a = 5


  function test2B() {
    if (1 == 1) {
      let a = 5;
  }
    console.log("a = " + a);
  }
  test2B(); // ReferenceError: a is not defined

  "use strict";
let a = 4;
function test3() {
a = 3;
  console.log("a = " + a);
}
test3();
console.log("a = " + a);