type first = {
    name:string
}

type second = {
    age:number
}

type third = first | second;
type fourth = first & second;

const variable1 : third = {
    age:12
};

const variable2 : third = {
    name:'John',
};

const variable3 : fourth = {
    age:12,
    name:'John',
}


console.log(variable1, variable2, variable3);