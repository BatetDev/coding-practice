/**
 * Capitalizes each word in `title`: words of 3+ letters get their first
 * letter uppercased, the rest lowercased; 1–2 letter words stay lowercase.
 *
 * @param {string} title - words separated by single spaces
 * @returns {string}
 */
const capitalizeTitle = (title) =>
  title
    .toLowerCase()
    .split(' ')
    .map((word) =>
      word.length > 2 ? word[0].toUpperCase() + word.slice(1) : word,
    )
    .join(' ');
