// split to return an array
// map to iterate over each element and transform it into a 0 or 1
// join to remake the string
const fakeBin = (str) => {
  return str
    .split("")
    .map((element) => (element < 5 ? "0" : "1"))
    .join("");
};

console.log(fakeBin("45385593107843568"));
