function nearestSquare(n) {
  let root = sqrt(n);
  let lower = floor(root);
  let upper = ceil(root);

  let lowerSquare = lower * lower;
  let upperSquare = upper * upper;

  if (n - lowerSquare <= upperSquare - n) {
    return lowerSquare;
  } else {
    return upperSquare;
  }
}
