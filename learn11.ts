/* kết hợp classes và interface */

/*Class */
class Students{
    fullName: string;
    constructor(
        public name: string | number,
        public age: number,
        public isSex: boolean | object,
    ){
        this.fullName = name + " " + age + " " + isSex;
    }
}

/* Interface */
interface Person{
    name: number | string;
    // age: number;
    isSex: object|boolean;
}

let user = new Students(
    'Trần Tín',
    20,
    true
);
function createPerson(person:Person){
    return person.name + " " +  " " + person.isSex;
}


document.body.textContent = createPerson(user);
