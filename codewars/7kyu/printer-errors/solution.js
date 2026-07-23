function printerError(s) {
  let numerator = 0;
  let denominator = s.length;

  for (const char of s) {
    char > 'm' && numerator++;
  }

  return `${numerator}/${denominator}`;
}
