
 // 1. for loop: Multiplication table of 5
console.log("-- Multiplication Table of 5 --");

for (let i = 1; i <= 5; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// 2. while loop: Find the first number greater than 10
// that is divisible by 6, using break
let num = 11;

while (true) {
    if (num > 10 && num % 6 === 0) {
        console.log("First number greater than 10 divisible by 6: " + num);
        break;
    }
    num++;
}

// 3. do...while loop: Skip numbers using continue
let count = 0;

console.log("-- Numbers excluding 3 --");

do {
    count++;

    if (count === 3) {
        continue;
    }

    console.log(count);

} while (count < 5);
