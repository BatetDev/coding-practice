function flickSwitch(arr) {
  let flag = true;
  return arr.map((item) => {
    if (item === 'flick') {
      flag = !flag;
    }
    return flag;
  });
}
