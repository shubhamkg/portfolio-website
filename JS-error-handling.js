try {
  let result = a + 10;
  console.log(result);
} catch (error) {
  console.log("Caught Run-Time Error:", error.message);
}

try {
  let age = -5;

  if (age < 0) {
    throw "Age cannot be negative";
  }

  console.log("Valid age:", age);
} catch (err) {
  console.log("Caught Custom Error:", err);
}

try {
  let x = y + 1;
  console.log(x);
} catch (err) {
  console.log("Error caught:", err.message);
} finally {
  console.log("Finally block executed");
}

try {
  let a = 10;
  let b = 5;
  console.log("Sum:", a + b);
} catch (err) {
  console.log("Error:", err);
} finally {
  console.log("This also runs when no error occurs");
}

