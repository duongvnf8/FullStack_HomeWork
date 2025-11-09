const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1200 },
  { id: 2, name: "Phone", category: "Electronics", price: 800 },
  { id: 3, name: "Shirt", category: "Clothing", price: 40 },
  { id: 4, name: "Shoes", category: "Clothing", price: 60 },
  { id: 5, name: "Headphones", category: "Electronics", price: 150 },
];
// - Lọc ra các sản phẩm thuộc danh mục "Electronics".
const filterProducts = (products, category) => {
  return products.filter((product) => {
    return product.category === category;
  });
};
console.log(filterProducts(products, "Electronics"));

// -  Tính tổng giá của tất cả sản phẩm trong danh mục "Electronics".
const totalProducts = (products, category) => {
  return filterProducts(products, category).reduce((acc, cur) => {
    return acc + cur.price;
  }, 0);
};
console.log(totalProducts(products, "Electronics"));

// - Chuyển đổi mảng sản phẩm thành một object, trong đó key là category, value là mảng các sản phẩm thuộc danh mục đó.
const groupCategory = (products) => {
  return products.reduce((acc, cur) => {
    acc[cur.category] = acc[cur.category] || [];
    acc[cur.category].push(cur);
    return acc;
  }, {});
};
console.log(groupCategory(products));
