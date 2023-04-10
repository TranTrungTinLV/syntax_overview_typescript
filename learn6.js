"use strict";
/* Function Signature */
let greet2; //Signature
greet2 = () => console.log("Hello"); //phần tạo hàm 
greet2(); //gọi hàm
let greet4;
greet4 = (name, age) => console.log(`${name} say ${age}`);
greet4('Tín', '21');
let caculate;
caculate = (numOne, numTwo, action) => action === 'add' ? numOne + numTwo : numOne - numTwo;
let kq_2 = caculate(4, 2, 'abc'); //xảy ra trường hợp -
let kq = caculate(1, 2, 'add'); //xảy ra trường hợp +
console.log(kq_2);
console.log(kq);
let pritnStudent;
pritnStudent = (myStudent) => { console.log(`${myStudent.name} - ${myStudent.age} said boiz`); };
pritnStudent({ name: 'Tín', age: 21 });
