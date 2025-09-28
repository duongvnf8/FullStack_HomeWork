const PRICE_LEVEL1 = 1678;
const PRICE_LEVEL2 = 1734;
const PRICE_LEVEL3 = 2014;
const PRICE_LEVEL4 = 2536;
const PRICE_LEVEL5 = 2834;
const PRICE_LEVEL6 = 2927;
const DISTANCE_1 = 50;
const DISTANCE_2 = 100;
const DISTANCE_3 = 200;
const DISTANCE_4 = 300;
const DISTANCE_5 = 400;

let kwh = 700;
let total;

if (kwh < 0) {
  console.log("Không hợp lệ");
} else if (kwh <= DISTANCE_1) {
  total = kwh * PRICE_LEVEL1;
} else if (kwh <= DISTANCE_2) {
  total = DISTANCE_1 * PRICE_LEVEL1 + (kwh - DISTANCE_1) * PRICE_LEVEL2;
} else if (kwh <= DISTANCE_3) {
  total =
    DISTANCE_1 * PRICE_LEVEL1 +
    (DISTANCE_2 - DISTANCE_1) * PRICE_LEVEL2 +
    (kwh - DISTANCE_2) * PRICE_LEVEL3;
} else if (kwh <= DISTANCE_4) {
  total =
    DISTANCE_1 * PRICE_LEVEL1 +
    (DISTANCE_2 - DISTANCE_1) * PRICE_LEVEL2 +
    (DISTANCE_3 - DISTANCE_2) * PRICE_LEVEL3 +
    (kwh - DISTANCE_3) * PRICE_LEVEL4;
} else if (kwh <= DISTANCE_5) {
  total =
    DISTANCE_1 * PRICE_LEVEL1 +
    (DISTANCE_2 - DISTANCE_1) * PRICE_LEVEL2 +
    (DISTANCE_3 - DISTANCE_2) * PRICE_LEVEL3 +
    (DISTANCE_4 - DISTANCE_3) * PRICE_LEVEL4 +
    (kwh - DISTANCE_4) * PRICE_LEVEL5;
} else {
  total =
    DISTANCE_1 * PRICE_LEVEL1 +
    (DISTANCE_2 - DISTANCE_1) * PRICE_LEVEL2 +
    (DISTANCE_3 - DISTANCE_2) * PRICE_LEVEL3 +
    (DISTANCE_4 - DISTANCE_3) * PRICE_LEVEL4 +
    (DISTANCE_5 - DISTANCE_4) * PRICE_LEVEL5 +
    (kwh - DISTANCE_5) * PRICE_LEVEL6;
}

if (total) {
  console.log(`Số tiền phải đóng là: ${total}`);
}
