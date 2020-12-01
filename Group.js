import Person from "./Person.js";
import Boy from "./Boy.js";
import Girl from "./Girl.js";
import Relationship from "./Relationship.js";
export default class Group {
    people;
    relationships;
    constructor() {
        this.people = [];
        this.relationships = [];
    }

    addPeople(p) {
        if (p instanceof Person) {
            this.people.push(p);
        }
    }

    addRelationship(a, b) {
        if (a instanceof Person && b instanceof Person && a != b) {
            let foundRelationship = this.relationship.find((relationship) => {
                return (relationship.a == a && relationship.b == b) || (relationship.a == b && relationship.b == a);
            });

            if (!foundRelationship) {
                let newRelationship = new Relationship(a, b);
                this.relationships.push(newRelationship);
            }
        }
    }

    findAllFriends(p) {
        let listFriends = [];
        for (let i = 0; i < this.relationships.length; i++) {
            if (p instanceof Person && p.name == this.relationships[i].a.name) {
                listFriends.push(this.relationships[i].b.name);
            }
            if (p instanceof Person && p.name == this.relationships[i].b.name) {
                listFriends.push(this.relationships[i].a.name);
            }
        }
    }

    findMaleFriends(p) {
        let AllFriends = this.findAllFriends(p);
        let MaleFriends = [];
        for (let i = 0; i < AllFriends.length; i++) {
            if (AllFriends[i] instanceof Boy) {
                MaleFriends.push(AllFriends[i]);
            }
        }
    }

    findFemaleFriends(p) {
        let AllFriends = this.findAllFriends(p);
        let FemaleFriends = [];
        for (let i = 0; i < AllFriends.length; i++) {
            if (AllFriends[i] instanceof Girl) {
                FemaleFriends.push(AllFriends[i]);
            }
        }
    }

    findBeautifulFriends(p) {
        let femaleFriends = this.findFemaleFriends(p);
        let beautifulGirls = [];
        for (let i = 0; i < femaleFriends.length; i++) {
            if (femaleFriends[i].beauty > 5) {
                beautifulGirls.push(femaleFriends[i]);
            }
        }
    }
}