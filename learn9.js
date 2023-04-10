"use strict";
/* CLASS */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Eployee = void 0;
// class Eployee{
//     public fullname: string 
//     private myage: number
//     readonly male: boolean
//     //Cần tạo hàm khởi điểm
//     constructor(n:string, a: number, m: boolean) {
//         this.fullname = n;
//         this.myage = a;
//         this.male = m;
//     }
//     print(){
//         return `Name:${this.fullname}, Age:${this.myage}, Gender Male: ${this.male}`
//     }
// }
// const eployee = new Eployee('Trần Trung Tín',20,true);
// console.log(eployee); // toàn bộ obj
// console.log(eployee.fullname); // xuất tên 
// // console.log(eployee.myage); //này đang chế độ private nên nó sẽ báo lỗi
// console.log(eployee.male); //này vẫn xuất ra nhưng nó ở chế độ đọc
class Eployee {
    constructor(name, age, male) {
        this.name = name;
        this.age = age;
        this.male = male;
    }
    print() {
        return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.male}`;
    }
}
exports.Eployee = Eployee;
const mangA = new Eployee('Levi', 21, false);
const mangB = new Eployee('Tín', 21, false);
let eployee = [];
eployee.push(mangA),
    eployee.push(mangB);
eployee.forEach(eployee => console.log(eployee.name, eployee.male, eployee.print()));
