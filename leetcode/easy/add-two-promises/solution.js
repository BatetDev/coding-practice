/**
 * Resolves with the sum of the two resolved values.
 *
 * @param {Promise<number>} promise1
 * @param {Promise<number>} promise2
 * @returns {Promise<number>} a promise resolving to `promise1 + promise2`
 */
const addTwoPromises = async (promise1, promise2) => {
  const [num1, num2] = await Promise.all([promise1, promise2]);
  return num1 + num2;
};
