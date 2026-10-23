
let score = Number(prompt("Enter your test score:"));

// Determine the letter grade using if...else
let grade;

if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}

// Determine the grade using a switch statement
switch (grade) {
    case "A":
        grade = "A";
        break;
    case "B":
        grade = "B";
        break;
    case "C":
        grade = "C";
        break;
    case "D":
        grade = "D";
        break;
    default:
        grade = "F";
}

// Use a ternary operator to determine pass or fail
let final = score >= 60 ? "Passed" : "Failed";

// Display the results
console.log(`Score: ${score}`);
console.log(`Grade: ${grade}`);
console.log(`Status: ${final}`);
