/**
 * Sleeps for the given number of milliseconds.
 *
 * @param {number} millis - The number of milliseconds to wait.
 * @returns {Promise<void>} A promise that resolves after the delay.
 */

async function sleep(millis) {
  await new Promise((resolve) => {
    setTimeout(resolve, millis);
  });
}
