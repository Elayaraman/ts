enum week  {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

const today: week = week.Monday;
console.log(today); // Output: 1

// We can also assign custom values to the enum members
enum status {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Pending = "PENDING"
}

const userStatus: status = status.Active;
console.log(userStatus); // Output: "ACTIVE"

// Enums can also be used with computed values
enum directions {
    Up = 1,
    Down,
    Left,
    Right
}

console.log(directions.Up); // Output: 1
console.log(directions.Down); // Output: 2
console.log(directions.Left); // Output: 3
console.log(directions.Right); // Output: 4