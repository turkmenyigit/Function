function mixedNumbers(arr) {
    arr.unshift("I", 2, "three"); //adds elements to the beginning
    arr.push(7, "VIII", 9); //adds elements to the end of an array
    return arr;
  }
  console.log(mixedNumbers(["IV", 5, "six"]));

  function popShift(arr) {
    let popped = arr.pop(); //removes an element from the end of an array
    let shifted = arr.shift(); //removes an element from the beginning
    return [shifted, popped];
  }
  console.log(popShift(["challenge", "is", "not", "complete"]));