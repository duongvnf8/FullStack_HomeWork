const products = [
  { name: "Laptop", price: 15000000 },
  { name: "Mouse", price: 250000 },
  { name: "Keyboard", price: 800000 },
];

// Tạo mảng mới chỉ chứa tên sản phẩm.
const productNames = products.map(function (product) {
  return product.name;
});
console.log("Tên sản phẩm:", productNames);

// Tính tổng giá trị tất cả sản phẩm.
const totalPrice = products.reduce(function (sum, product) {
  return sum + product.price;
}, 0);
console.log("Tổng giá trị sản phẩm:", totalPrice);

// Lọc ra sản phẩm có giá lớn hơn 1 triệu.
const expensiveProducts = products.filter(function (product) {
  return product.price > 1000000;
});
console.log("Sản phẩm có giá > 1 triệu:", expensiveProducts);
