class Car {
  move() {
    console.log("Xe hơi đang chạy...");
  }
}

class Bicycle {
  move() {
    console.log("Xe đạp đang chạy...");
  }
}

function start(vehicle) {
  if (typeof vehicle.move === "function") {
    vehicle.move();
  } else {
    console.log("Không thể di chuyển!");
  }
}

const car = new Car();
const bike = new Bicycle();
start(car); // Xe hơi đang chạy...
start(bike); // Xe đạp đang chạy...
start({}); // Không thể di chuyển!
