var n = 10;
let evenNumber = "";
let oddNumber = "";
for (let i = 1; i < n; i++) {
  if (i % 2 === 0) {
    evenNumber += i + " ";
  } else {
    oddNumber += i + " ";
  }
}
console.log(`Số ${n} có các số chẵn cà số lẻ là:`);

console.log("Số lẻ: " + oddNumber);
console.log("Số chẵn: " + evenNumber);
