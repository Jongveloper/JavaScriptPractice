"use strict";

// Variable, rw(read/write)
// let (added in ES6)

let globalName = "global name";
{
  let name = "Jongveloper";
  console.log(name);
  name = "hello";
  console.log(name);
  console.log(globalName);
}

console.log(name);
console.log(globalName);

// 3. Constant, r(read only)
// use const whenever possible.
// only use let if variable needs to changes.

// favor immutable data type always for a few reasons:
// - security
// - thread saftey
// - reduce human mistakes

const daysInWeek = 7;
const maxNumber = 5;

// Note
// Immutable data types: premitive types, frozen objects (i.e. obecth.freeze())
// Muttable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// - security
// - thread saftey
// - reduce human mistakes


//Variable types
// primitive, single item: number, string, boolean, null, undefined, sybmol
// object, box container
// function, first-class function

//number
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value : ${count}, type: ${typeof count}`);
console.log(`value : ${size}, type: ${typeof size}`);

// symbol, create uniqe indentifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
//map이나 다른 자료구조에서 고유한 식별자가 필요할 때 사용함
console.log(symbol1 === symbol2); // false
//symbol은 동일한 string을 작성했어도 다른 symbol로 만들어지기 때문에 고유한 식별자를 만들 때 사용된다.
//string이 같다면 동일한 symbol을 만들고 싶을 때 !?
const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);
// symbol을 바로 출력하게되면 에러가 발생하기 때문에 .description을 이용해 string으로 변환해서 출력해야한다.

// object, real-life object, data structure
const Jongveloper = { name: "Jongveloper", age: "28" };
// Jongveloper는 const로 지정되어있어 한번 할당된 오브젝트는 다른 오브젝트로 변경이 불가
// 하지만 Jongveloper 안에는 name과 age라는 변수들이 존재한다. 따라서 object안에 변수는 다른값으로 할당이 가능하다.
Jongveloper.age = "20";
// 5. Dynamic typing: dynamically typed language
// 변수를 선언할 때 어떤 타입인지 선언하지 않고 프로그램이 동작할 때 할당된 값에 따라 타입이 변경될 수 있다.
let text = "hello";
console.log(`value: ${text}, type: ${typeof text}`); // value: hello, type: string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // value: 1, type: number
text = "7" + 5;
console.log(`value: ${text}, type: ${typeof text}`); // value: 75, type: string
text = "8" / "2";
console.log(`value: ${text}, type: ${typeof text}`); // value: 4, type: number
