const reviews = [
  { productId: "P1", userId: "U1", rating: 5 },
  { productId: "P2", userId: "U2", rating: 4 },
  { productId: "P1", userId: "U3", rating: 3 },
  { productId: "P3", userId: "U1", rating: 4 },
  { productId: "P2", userId: "U3", rating: 2 },
  { productId: "P1", userId: "U2", rating: 4 },
];

// - Tính điểm trung bình đánh giá của mỗi sản phẩm.
const reviewAvg = (reviews) => {
  const grouped = reviews.reduce((acc, cur) => {
    acc[cur.productId] = acc[cur.productId] || [];
    acc[cur.productId].push(cur.rating);
    return acc;
  }, {});

  return Object.entries(grouped).map((item) => {
    const productId = item[0];
    const ratingList = item[1];
    return {
      productId,
      avg:
        ratingList.reduce((acc, cur) => {
          return acc + cur;
        }, 0) / ratingList.length,
    };
  });
};
console.log(reviewAvg(reviews));

// - Tìm sản phẩm có điểm trung bình cao nhất.
const searchTopProduct = (reviews) => {
  return reviewAvg(reviews).reduce((acc, cur) => {
    if (cur.avg > acc.avg) {
      return cur;
    }
    return acc;
  });
};
console.log(searchTopProduct(reviews));

// - Nhóm danh sách đánh giá theo productId, trong đó mỗi sản phẩm có danh sách đánh giá của từng người dùng.
const groupProduct = (reviews) => {
  return reviews.reduce((acc, cur) => {
    acc[cur.productId] = acc[cur.productId] || [];
    acc[cur.productId].push({
      user: cur.userId,
      rating: cur.rating,
    });
    return acc;
  }, {});
};
console.log(groupProduct(reviews));
