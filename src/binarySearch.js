function binarySearch(searchNum, numbersArray) {
  let middle = Math.floor(numbersArray.length / 2);
  for (let i = 0; i < middle; i++) {
    if (middle === searchNum) {
      console.log("success");
      console.log(middle);
      return middle;
    }
    if (middle < searchNum) {
      middle += Math.floor(middle / 2);
    }
    if (middle > searchNum) {
      middle -= Math.floor(middle / 2);
    }
  }
}
