const orders = [
  {
    orderId: 101,
    customer: "John",
    items: [{ name: "Laptop", price: 1000, quantity: 1 }],
  },
  {
    orderId: 102,
    customer: "Alice",
    items: [
      { name: "Phone", price: 500, quantity: 2 },
      { name: "Charger", price: 50, quantity: 3 },
    ],
  },
  {
    orderId: 103,
    customer: "Bob",
    items: [{ name: "Headphones", price: 200, quantity: 2 }],
  },
];

// - Tính tổng tiền của từng đơn hàng.
const totalOrder = (orders) => {
  return orders.map((order) => {
    const total = order.items.reduce((acc, cur) => {
      return acc + cur.price * cur.quantity;
    }, 0);
    return Object.assign({}, order, { total });
  });
};
console.log(totalOrder(orders));

// - Tìm khách hàng có đơn hàng có tổng tiền cao nhất.
const searchTop = (orders) => {
  return totalOrder(orders).reduce((acc, cur) => {
    return cur.total > acc.total ? cur : acc;
  });
};
console.log(searchTop(orders));

// - Gộp danh sách tất cả các sản phẩm từ các đơn hàng, nhóm theo tên sản phẩm và tính tổng số lượng của mỗi sản phẩm.
const groupItems = (orders) => {
  const mergedItems = orders
    .map((order) => {
      return order.items;
    })
    .flat(Infinity);
  return mergedItems.reduce((acc, cur) => {
    acc[cur.name] = (acc[cur.name] || 0) + cur.quantity;
    return acc;
  }, {});
};
console.log(groupItems(orders));
