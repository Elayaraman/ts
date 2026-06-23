class User {
    name: string;
    age: number;
    private secret: string = "This is a secret";
    protected protectedProperty: string = "This is a protected property";

    private phoneNumber: string = "123-456-7890"; // Private property

    static staticProperty: string = "This is a static property";

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        return `Hello, my name is ${this.name}`;
    }

    printSecret() {
        console.log(this.secret);
    }

    setPhoneNumber(phoneNumber: string) {
        this.phoneNumber = phoneNumber;
    }

    getPhoneNumber() {
        return this.phoneNumber;
    }

}

class Admin extends User {
    constructor(name: string, age: number) {
        super(name, age);
    }

    printProtectedProperty() {
        console.log(this.protectedProperty);
    }
}

const userOne = new User("ram", 23);
const adminOne = new Admin("shyam", 25);

console.log(userOne);
console.log(userOne.greeting());
console.log(userOne.printSecret());
// console.log(userOne.secret); // Error: Property 'secret' is private and only accessible within class 'User'.
console.log(adminOne);
console.log(adminOne.greeting());
console.log(adminOne.printSecret());
console.log(adminOne.printProtectedProperty());
// console.log(adminOne.protectedProperty); // Error: Property 'protectedProperty' is protected and only accessible within class 'User' and its subclasses.

console.log(User.staticProperty); // Accessing static property without creating an instance
User.staticProperty = "Updated static property"; // Modifying static property without creating an instance


    