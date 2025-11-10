const baseUrl = `https://dummyjson.com`;
const query = {
  sortBy: "",
  order: "",
  page: 1,
  limit: 10,
};

const renderPosts = (posts) => {
  const postListEl = document.querySelector(".js-post-list");
  const html = posts
    .map(
      (post) => `<div class="border border-gray-400 p-3 mb-3">
          <h2 class="text-2xl font-medium mb-3">
            ${post.title}
          </h2>
          <p class="mb-3">${post.body.split(".").slice(0, 3).join(".")}.</p>
          <div class="flex mt-2 justify-between items-center">
            <button
              class="js-view border border-gray-400 px-3 py-2 rounded-full cursor-pointer hover:bg-[green] hover:text-white" data-id="${
                post.id
              }"
            >
              Xem chi tiết
            </button>
            <div class="flex gap-2">
              <span class="js-edit-post cursor-pointer" data-id="${
                post.id
              }">Sửa</span>
              <span class="js-delete-post cursor-pointer text-red-600" data-id="${
                post.id
              }">Xóa</span>
            </div>
          </div>
        </div>`
    )
    .join("");
  postListEl.innerHTML = html;

  //Xem chi tiết
  const viewBtnList = postListEl.querySelectorAll(".js-view");
  viewBtnList.forEach((btn) => {
    btn.addEventListener("click", async () => {
      const id = btn.dataset.id; // Lấy đúng id
      try {
        const response = await fetch(`${baseUrl}/posts/${id}`);
        if (!response.ok) {
          throw new Error("Không tải được bài viết");
        }
        const post = await response.json();
        openModal(() => ({
          modalTitle: post.title,
          modalContent: post.body,
        }));
      } catch (err) {
        alert("Có lỗi khi tải chi tiết bài viết!");
      }
    });
  });

  //Sửa
  const btnEdit = postListEl.querySelectorAll(".js-edit-post");
  btnEdit.forEach((btn) => {
    btn.addEventListener("click", async () => {
      const id = btn.dataset.id;
      const res = await fetch(`${baseUrl}/posts/${id}`);
      const post = await res.json();
      openModal(() => ({
        modalTitle: "Cập nhật bài viết",
        modalContent: `
          <form class="js-edit-form flex flex-col gap-2">
            <input class="js-edit-title border border-gray-300 p-2" value="${post.title}" />
            <textarea class="js-edit-body border border-gray-300 p-2">${post.body}</textarea>
            <button type="submit" class=" my-2 px-3 py-1 bg-green-700 text-white cursor-pointer">Lưu</button>
          </form>
        `,
      }));

      const form = document.querySelector(".js-edit-form");
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const title = document.querySelector(".js-edit-title").value;
        const body = document.querySelector(".js-edit-body").value;
        await fetch(`${baseUrl}/posts/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title, body }),
        });
        alert("Đã cập nhật bài viết");
        closeModal();
        fetchPosts();
      });
    });
  });

  const btnDelete = postListEl.querySelectorAll(".js-delete-post");
  btnDelete.forEach((btn) => {
    btn.addEventListener("click", async () => {
      const id = btn.dataset.id;
      if (!confirm("Bạn có chắc muốn xóa bài viết này?")) {
        return;
      }
      await fetch(`${baseUrl}/posts/${id}`, {
        method: "DELETE",
      });
      alert("Xóa bài viết thành công");
      fetchPosts();
    });
  });
};

// Thêm bài viết
const addNewPost = () => {
  const btnAdd = document.querySelector(".js-add-post");
  btnAdd.addEventListener("click", () => {
    openModal(() => ({
      modalTitle: "Thêm bài viết",
      modalContent: `
        <form class="js-add-form flex flex-col gap-2">
          <input class="js-add-title border-gray-300 border p-2" placeholder="Tiêu đề..." />
          <textarea class="js-add-body border-gray-300 border p-2" placeholder="Nội dung..."></textarea>
          <button type="submit" class="js-update-post my-2 px-3 py-1 bg-green-700 text-white cursor-pointer">Lưu</button>
        </form>
      `,
    }));

    const form = document.querySelector(".js-add-form");
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const title = document.querySelector(".js-add-title").value;
      const body = document.querySelector(".js-add-body").value;

      const res = await fetch(`${baseUrl}/posts/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          body,
          userId: 1,
        }),
      });
      const newPost = await res.json();

      alert("Thêm bài viết thành công");
      closeModal();
      fetchPosts();
    });
  });
};

const sortNewBtn = document.querySelector(".js-sort-new");
const sortOldBtn = document.querySelector(".js-sort-old");

sortNewBtn.addEventListener("click", () => {
  query.sortBy = "id";
  query.order = "desc";
  query.page = 1;
  fetchPosts();
});

sortOldBtn.addEventListener("click", () => {
  query.sortBy = "id";
  query.order = "asc";
  query.page = 1;
  fetchPosts();
});

const setLoading = (status = true) => {
  const loadingEl = document.querySelector(".js-loading");
  loadingEl.innerHTML = status
    ? `<span class="text-3xl block text-center">Loading...</span>`
    : "";
};
const renderError = (message) => {
  const postListEl = document.querySelector(".js-post-list");
  postListEl.innerHTML = `<span class="text-3xl block text-center text-red-600 underline">${message}</span>`;
};
const fetchPosts = async () => {
  try {
    //Add loading
    setLoading();

    let url = `${baseUrl}/posts`;
    if (query.search) {
      url = `${baseUrl}/posts/search?q=${query.search}`;
    }
    if (query.sortBy && query.order) {
      if (url.includes("?")) {
        url += `&sortBy=${query.sortBy}&order=${query.order}`;
      } else {
        url += `?sortBy=${query.sortBy}&order=${query.order}`;
      }
    }

    const skip = query.limit * (query.page - 1);
    if (url.includes("?")) {
      url += `&limit=${query.limit}&skip=${skip}`;
    } else {
      url += `?limit=${query.limit}&skip=${skip}`;
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch /posts");
    }
    const { posts, total } = await response.json();
    renderPosts(posts);
    renderPagination(total);
  } catch {
    renderError(`Đã có lỗi khi tải dữ liệu`);
  } finally {
    //Remove loading
    setLoading(false);
  }
};

const debounce = (callback, timeout = 500) => {
  let timeoutId;
  return (...args) => {
    //rest parameter
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback(...args); //spread
    }, timeout);
  };
};
const addSearchEvent = () => {
  const searchEl = document.querySelector(".js-search");
  searchEl.addEventListener(
    "input",
    debounce((e) => {
      const value = e.target.value;
      //Call api với keyword là value
      query.search = value;
      fetchPosts();
    })
  );
};
const openModal = (callback) => {
  if (typeof callback !== "function") {
    return;
  }
  const modalEl = document.querySelector(".js-modal");
  const modalTitle = modalEl.querySelector(".js-modal-title");
  const modalConent = modalEl.querySelector(".js-modal-content");
  modalEl.classList.remove("hidden");
  const option = callback();
  modalTitle.innerText = option.modalTitle;
  modalConent.innerHTML = option.modalContent;
};
const closeModal = () => {
  const modalEl = document.querySelector(".js-modal");
  const modalTitle = modalEl.querySelector(".js-modal-title");
  const modalConent = modalEl.querySelector(".js-modal-content");
  modalEl.classList.add("hidden");
  modalTitle.innerText = "";
  modalConent.innerText = "";
};

const addEventCloseModal = () => {
  const overlay = document.querySelector(".js-overlay");
  overlay.addEventListener("click", closeModal);
  document.addEventListener("keyup", (e) => {
    if (e.key == "Escape") {
      closeModal();
    }
  });
};

const renderPagination = (total) => {
  const paginationEl = document.querySelector(".js-pagination");
  const totalPage = Math.ceil(total / query.limit);
  let html = "";

  for (let i = 1; i <= totalPage; i++) {
    html += `
      <button class="page-btn border border-gray-500 block py-2 px-4 ${
        i === query.page ? "bg-green-700 text-white" : ""
      }" data-page="${i}">
        ${i}
      </button>
    `;
  }

  paginationEl.innerHTML = html;

  const btnNumber = paginationEl.querySelectorAll(".page-btn");
  btnNumber.forEach((btn) => {
    btn.addEventListener("click", () => {
      query.page = Number(btn.dataset.page);
      fetchPosts();
    });
  });
};

addEventCloseModal();
fetchPosts();
addSearchEvent();
addNewPost();
