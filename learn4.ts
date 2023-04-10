/* Explict Types */

let Name: string | number | string[]; 
let Age: number;
let isSet: boolean;
Name = 'Trần Trung Tín'
console.log(Name)

Age = 12
isSet = false
Name = ['trần','trung','tín']
console.log(Name);

let hobby: 'book' | 'music'
hobby = 'book'
console.log(hobby)
hobby = 'music'
console.log(hobby)


let students: {
    name: string,
    age: number,
    isGood: boolean,
}

students = {
    name:'Trần Trung Tín',
    age: 20,
    isGood: true,
}
console.log(students)
