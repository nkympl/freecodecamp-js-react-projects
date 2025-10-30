- Arrays have a special `length` property that allows you to see how many values, or elements, are in the array. You would access this property using syntax like myArray.length.

- Just like addition, there are different operators you can use for subtraction. The subtraction assignment operator `-=` subtracts the given value from the current variable value, then assigns the result back to the variable.
  - Because you are only subtracting one from i, you can use the decrement operator --.

- The `.unshift()` method of an array allows you to add a value to the beginning of the array, unlike `.push()` which adds the value at the end of the array. `.unshift()` **returns the new length of the array it was called on**.

  ```javascript
  const countDown = [2, 1, 0];
  const newLength = countDown.unshift(3);
  console.log(countDown); // [3, 2, 1, 0]
  console.log(newLength); // 4
  ```

- Arrays also have a `.shift()` method. This will remove the first element of the array, unlike .pop() which removes the last element.

  ```javascript
  const numbers = [1, 2, 3];
  numbers.shift(); // numbers = [2, 3]
  ```
