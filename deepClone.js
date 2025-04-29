const deepClone = (obj) => {
    // Check if the value is a primitive type (string, number, boolean, null, undefined, symbol) or a function
    if (obj === null || typeof obj !== 'object' || typeof obj === 'function') {
        return obj;
    }
    // Check if the value is an array
    if (Array.isArray(obj)) {
        let arrCopy = [];
        for (item of obj) {
            arrCopy.push(deepClone(item));
        }
        return arrCopy;
    }
    // Check if the value is a date
    let objCopy = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            objCopy[key] = deepClone(obj[key]);
        }
    }
    return objCopy;
}

const original = {
    name: "John Doe",
    age: 30,
    hobbies: ["reading", "gaming"],
    address: {
        city: "New York",
        zip: 10001
    },
    dateOfBirth: new Date("1993-01-01"),
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};
const clone = deepClone(original);
console.log(clone); // Output: Deep cloned object
console.log(clone == original); // Output: false (different references)
console.log(clone.hobbies === original.hobbies); // Output: false (different references)