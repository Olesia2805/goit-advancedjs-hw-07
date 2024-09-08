class Key{
    private signature: number;

    constructor(){
        this.signature = Math.random();
    }
    
    public getSignature(): number{
        return this.signature;
    }
}

class Person{
    private key: Key;
    
    constructor(key: Key){
        this.key = key;
    }
    
    public getKey(): Key{
        return this.key;
    }
}

abstract class House{
    protected door: boolean = false;
    protected key: Key;
    protected tenants: Person[] = [];
    
    constructor(key: Key) {
        this.key = key;
    }

    public comeIn(person: Person): void{
        if (this.door) {
            this.tenants.push(person);
            console.log("Welcome!");
        } else {
            console.log("Access denied.");
        }
    }
    public abstract openDoor(key: Key): void;
}

class MyHouse extends House{
    constructor(key: Key) {
        super(key);
    }

    public openDoor(key: Key): void {
        if (this.key.getSignature() === key.getSignature()) {
            this.door = true;
            console.log("Door is open");
        } else {
            this.door = false;
            console.log("Wrong key");
        }
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


// // Scenario 1: Correct key
// const key1 = new Key();
// const house1 = new MyHouse(key1);
// const person1 = new Person(key1);

// console.log("Scenario 1: Correct key");
// house1.openDoor(person1.getKey());
// house1.comeIn(person1);

// // Scenario 2: Incorrect key
// const key2 = new Key();
// const person2 = new Person(key2);

// console.log("\nScenario 2: Incorrect key");
// house1.openDoor(person2.getKey());
// house1.comeIn(person2);


export {};
