let arr = [20, 10, -5, -40, 50, 20];

console.log("Original Array:", arr);

// Reverse Array
let left = 0;
let right = arr.length - 1;

while (left < right) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;

  left++;
  right--;
}

console.log("Reversed Array:", arr);

// Find Maximum and Minimum Together
let maxVal = arr[0];
let minVal = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > maxVal) {
    maxVal = arr[i];
  }

  if (arr[i] < minVal) {
    minVal = arr[i];
  }
}

console.log("Maximum Element:", maxVal);
console.log("Minimum Element:", minVal);

// Find Second Maximum Element
let firstMax = -Infinity;
let secondMax = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > firstMax) {
    secondMax = firstMax;
    firstMax = arr[i];
  } else if (arr[i] > secondMax && arr[i] !== firstMax) {
    secondMax = arr[i];
  }
}

console.log("Second Maximum Element:", secondMax);

// Find Equilibrium Index
let totalSum = 0;

for (let i = 0; i < arr.length; i++) {
  totalSum += arr[i];
}

let leftSum = 0;
let equilibriumIndex = -1;

for (let i = 0; i < arr.length; i++) {
  let rightSum = totalSum - leftSum - arr[i];

  if (leftSum === rightSum) {
    equilibriumIndex = i;
    break;
  }

  leftSum += arr[i];
}

console.log("Equilibrium Index:", equilibriumIndex);

// Find Pair with Given Sum
let sortedArr = [10, 20, 30, 40, 50];
let targetSum = 70;

let i = 0;
let j = sortedArr.length - 1;
let found = false;

while (i < j) {
  let currentSum = sortedArr[i] + sortedArr[j];

  if (currentSum === targetSum) {
    console.log("Pair Found");
    found = true;
    break;
  } else if (currentSum < targetSum) {
    i++;
  } else {
    j--;
  }
}

if (!found) {
  console.log("No pair found with sum:", targetSum);
}
