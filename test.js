let person = {name: "Sarah", country: "Nigeria", friends: ["Annie", "Becky"]};

let {name:foo, friends: bar} = person;

let person1 = {...person, country: "Vietnam"}

console.log(person1);
console.log(person);