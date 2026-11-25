const isPalindrome = (x: number): boolean => {
  if (x < 0) return false;
  const s = String(x);
  return s === s.split('').reverse().join('');
};
