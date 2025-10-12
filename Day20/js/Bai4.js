const posts = [
  {
    id: 1,
    title: "JavaScript cơ bản",
    tags: ["js", "basic"],
    comments: [
      { user: "An", text: "Hay quá!" },
      { user: "Bình", text: "Rất dễ hiểu" },
    ],
  },
  {
    id: 2,
    title: "Học React không khó",
    tags: ["react", "js"],
    comments: [{ user: "Chi", text: "Cảm ơn chia sẻ" }],
  },
];

// In ra tất cả title kèm số lượng comments của từng bài viết
console.log("-Danh sách bài viết và số lượng bình luận:");
posts.forEach((post) => {
  console.log(`${post.title} có ${post.comments.length} bình luận`);
});

// Tạo mảng mới chứa tất cả tags (không trùng lặp)
let allTags = [];

posts.forEach((post) => {
  post.tags.forEach((tag) => {
    if (!allTags.includes(tag)) {
      allTags.push(tag);
    }
  });
});
console.log("-Mảng tags không trùng lặp:", allTags);

// Tìm tất cả các bình luận của user "An"
let allComments = [];
posts.forEach((post) => {
  allComments = allComments.concat(post.comments);
});

const anComments = allComments.filter((comment) => comment.user === "An");
console.log("-Tất cả bình luận của An:", anComments);
