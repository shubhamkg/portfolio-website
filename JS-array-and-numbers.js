let arr = [10, 20, 30, 40];
console.log("Original:", arr);

// Add / Remove
arr.push(50);
console.log("push:", arr);

arr.pop();
console.log("pop:", arr);

arr.unshift(5);
console.log("unshift:", arr);

arr.shift();
console.log("shift:", arr);

console.log("indexOf 20:", arr.indexOf(20));
console.log("includes 30:", arr.includes(30));
console.log("slice(1,3):", arr.slice(1, 3));

arr.reverse();
console.log("reverse:", arr);

console.log("toString:", arr.toString());
console.log("concat:", arr.concat([60, 70]));


// NUMBER METHODS
let num = 123.456;
console.log("\nNumber:", num);

// toFixed()
console.log("toFixed(2):", num.toFixed(2));

// toPrecision()
console.log("toPrecision(4):", num.toPrecision(4));

// toString()
console.log("toString():", num.toString());

// parseInt & parseFloat
console.log("parseInt('123.45'):", parseInt("123.45"));
console.log("parseFloat('123.45'):", parseFloat("123.45"));

// isInteger()
console.log("Number.isInteger(10):", Number.isInteger(10));
console.log("Number.isInteger(10.5):", Number.isInteger(10.5));

// Math methods
console.log("Math.round(4.6):", Math.round(4.6));
console.log("Math.floor(4.9):", Math.floor(4.9));
console.log("Math.ceil(4.1):", Math.ceil(4.1));
console.log("Math.max(1,5,3):", Math.max(1, 5, 3));
console.log("Math.min(1,5,3):", Math.min(1, 5, 3));
console.log("Math.random():", Math.random());
