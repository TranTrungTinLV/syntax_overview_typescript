"use strict";
/* kết hợp classes và interface */
/*Class */
class Students {
    constructor(name, age, isSex) {
        this.name = name;
        this.age = age;
        this.isSex = isSex;
        this.fullName = name + " " + age + " " + isSex;
    }
}
let user = new Students('Trần Tín', 20, true);
function createPerson(person) {
    return person.name + " " + " " + person.isSex;
}
document.body.textContent = createPerson(user);
