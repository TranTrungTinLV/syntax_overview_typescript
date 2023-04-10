/* OPTIONAL AND NON NULL */

const add = (a: number, b?: number) =>( b ? a + b : a); //b? là tham số không bắt buột, đây là OPTIONAL

console.log(add(1,2));
console.log(add(3));

const addNonNull = (a: number, b?: number) => a + b! // ở đây nó xuất hiện lỗi non-null vì lý do tham số b có 2 trường hợp 1 là number và undefine
console.log(addNonNull(3,4))
console.log(addNonNull(8)) //NaN(Non-null)