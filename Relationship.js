import Person from "./Person.js";
export default class Relationship {
    a;
    b;
    constructor(a, b) {
        if (a instanceof Person && b instanceof Person) {
            this.a = a;
            this.b = b;
        }
    }
}