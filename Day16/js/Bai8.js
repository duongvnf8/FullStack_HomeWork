let rowNumber = 9;
let cur = 1;
for (let i = 1; i <= rowNumber; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += cur + " ";
    cur++;
  }
  console.log(line);
}
