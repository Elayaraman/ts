interface exampleInterface {
    name: string;
    age: number;
    greeting() : string; // optional property
}

let userOne : exampleInterface = {
    name: "ram",
    age: 23,
    greeting() {
        return `Hello, my name is ${this.name}`;
    },
    test: function (): string {
        throw new Error("Function not implemented.");
    }
}
// let userTwo : exampleInterface = {
//     name: "shyam",
//     age: "twenty three" // can't assign string to number
// }

console.log(userOne);
console.log(userOne.greeting());

type userType = {
    name: string;
    age: number;
    greeting() : string; // optional property
}

let userTwo : userType = {
    name: "shyam",
    age: 23,
    greeting() {
        return `Hello, my name is ${this.name}`;
    }
}

console.log(userTwo);
console.log(userTwo.greeting());

// difference between type and interface is that interface can be extended but type can't be extended
interface exampleInterface {
    name: string;
    age: number;
    greeting() : string; // optional property
}

interface exampleInterface {
    name: string;
    age: number;
    test() : string; // optional property
}

interface extendedInterface extends exampleInterface {
    address: string;
}

let userThree : extendedInterface = {
    name: "hari",
    age: 25,
    greeting() {
        return `Hello, my name is ${this.name}`;
    },
    test() {
        return `This is a test function`;
    },
    address: "Kathmandu"
}

console.log(userThree);
console.log(userThree.greeting());
console.log(userThree.test());