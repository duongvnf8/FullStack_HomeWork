const list = document.querySelector("#list");
const searchInput = document.querySelector("#search");
const overlay = document.getElementById("overlay");
const overlayTitle = document.getElementById("overlayTitle");
const overlayBody = document.getElementById("overlayBody");
const postBox = document.querySelector(".js-showPost");
const btnNew = document.querySelector(".js-newPost");
const btnOld = document.querySelector(".js-oldPost");

const baseUrl = "https://dummyjson.com";

let allPosts = [];

const getPosts = async (url = `${baseUrl}/posts?limit=10`) => {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Lỗi khi tải dữ liệu!");
    const data = await res.json();
    return data.posts;
  } catch (err) {
    console.error(err);
    list.innerHTML = `<p class="text-red-500 text-center mt-4">Không thể tải dữ liệu.</p>`;
    return [];
  }
};

function renderPosts(posts) {
  list.innerHTML = "";
  if (posts.length === 0) {
    list.innerHTML = `<p class="text-gray-500 text-center mt-4">Không có bài viết nào.</p>`;
    return;
  }

  posts.forEach((post) => {
    const div = document.createElement("div");
    div.className =
      "border border-gray-300 p-4 shadow-sm hover:shadow-md transition";

    div.innerHTML = `
      <h2 class="font-semibold text-lg mb-1">${post.title}</h2>
      <p class="mb-3">${post.body.split(".").slice(0, 3).join(".")}.</p>
      <div class="flex justify-between items-center">
        <button 
          class="js-show px-3 py-1 border border-gray-300 rounded-2xl hover:bg-green-600 hover:text-white cursor-pointer" 
          data-id="${post.id}">
          Xem chi tiết
        </button>
        <div>
          <button class="cursor-pointer">Sửa</button>
          <button class="text-red-500 cursor-pointer">Xóa</button>
        </div>
      </div>
    `;
    list.appendChild(div);
  });
}

const showPostDetail = async (id) => {
  try {
    const res = await fetch(`${baseUrl}/posts/${id}`);
    if (!res.ok) throw new Error("Không thể tải chi tiết bài viết!");
    const post = await res.json();

    overlayTitle.textContent = post.title;
    overlayBody.textContent = post.body;

    overlay.classList.remove("hidden");
    overlay.style.visibility = "visible";
    overlay.style.display = "flex";
  } catch (err) {
    console.error(err);
  }
};

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.style.visibility = "hidden";
    overlay.style.display = "none";
  }
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("js-show")) {
    const id = e.target.dataset.id;
    showPostDetail(id);
  }
});

const handleSearch = async (e) => {
  const keyword = e.target.value.trim();
  const url =
    keyword === ""
      ? `${baseUrl}/posts`
      : `${baseUrl}/posts/search?q=${keyword}`;

  const posts = await getPosts(url);
  renderPosts(posts);
};
btnNew.addEventListener("click", async () => {
  const posts = await getPosts(
    `${baseUrl}/posts?sortBy=id&order=desc&limit=10`
  );
  renderPosts(posts);
});

btnOld.addEventListener("click", async () => {
  const posts = await getPosts(`${baseUrl}/posts?sortBy=id&order=asc&limit=10`);
  renderPosts(posts);
});

getPosts().then((posts) => {
  allPosts = posts;
  renderPosts(posts);
});
searchInput.addEventListener("input", handleSearch);
