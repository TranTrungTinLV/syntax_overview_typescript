/* Function Signature */

let greet2: Function; //Signature
greet2 = () => console.log("Hello");//phần tạo hàm 
greet2();//gọi hàm

let greet4: (a:string, b:string) => void
greet4 = (name:string,age:string) => console.log(`${name} say ${age}`)
greet4('Tín','21')

let caculate: (a:number, b:number, c:string) => number
caculate = (numOne:number, numTwo:number, action:string) => action === 'add' ? numOne + numTwo : numOne - numTwo;
let kq_2 = caculate(4,2,'abc'); //xảy ra trường hợp -
let kq = caculate(1,2,'add'); //xảy ra trường hợp +
console.log(kq_2)
console.log(kq)

type Student = {name: string, age: number}
let pritnStudent: (student: Student) => void
pritnStudent = (myStudent: Student) => {console.log(`${myStudent.name} - ${myStudent.age} said boiz`)}

pritnStudent({name: 'Tín', age:21})