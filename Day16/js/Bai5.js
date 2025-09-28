let a = 2;
let b = 9;
evenTotal = 0;
oddTotal = 0;

for (i = a; i <= b; i++) {
  if (i % 2 === 0) {
    evenTotal += i;
  } else {
    oddTotal += i;
  }
}
console.log(`Tổng số chẵn và số lẻ trong khoảng từ ${a} đến ${b}`);
console.log(`Tổng số chẵn: ${evenTotal}`);
console.log(`Tổng số lẻ: ${oddTotal}`);
