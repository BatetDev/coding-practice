/**
 * Returns the FizzBuzz sequence from 1 to `n`.
 * Multiples of 3 → "Fizz", of 5 → "Buzz", of both → "FizzBuzz",
 * everything else → the number as a string.
 *
 * @param {number} n - upper bound, inclusive
 * @returns {string[]} array of `n` strings; index 0 corresponds to i = 1
 */
const fizzBuzz = (n) => {
  const output = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) output.push('FizzBuzz');
    else if (i % 3 === 0) output.push('Fizz');
    else if (i % 5 === 0) output.push('Buzz');
    else output.push(i.toString());
  }

  return output;
};
