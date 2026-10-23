
 // 1. Standard function with default parameters
function rectangleArea(length = 5, width = 4) {
    return length * width;
}

// 2. Arrow function with default parameters
const calculateArea = (length = 5, width = 4) => {
    return length * width;
};

// Display the results
console.log("Standard Function Area (Default 5x4): " + rectangleArea());
console.log("Arrow Function Area (Custom 10x3): " + calculateArea(10, 3));

// 3. Demonstrate function scope
function scopeExample() {
    var functionScoped = "I am function-scoped";
    console.log(functionScoped);
}

scopeExample();

// 4. Demonstrate block scope
if (true) {
    let blockScoped = "I am block-scoped";
    const constantBlockScoped = "I am also block-scoped";

    console.log(blockScoped);
    console.log(constantBlockScoped);
}

// The following would cause a ReferenceError if uncommented:
// console.log(blockScoped);
// console.log(constantBlockScoped);
