const form = document.querySelector("#todo-form");
const input = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");

form.addEventListener("submit", (e) => {
  const taskText = input.value.trim();

  if (!taskText) {
    alert("Vui lòng nhập công việc!");
    return;
  }
  const existingTasks = [...taskList.querySelectorAll("span")].map((el) =>
    el.textContent.toLowerCase()
  );
  if (existingTasks.includes(taskText.toLowerCase())) {
    alert("Task này đã tồn tại!");
    input.value = "";
    return;
  }

  // Xóa
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });
  // Sửa
  const editBtn = document.createElement("button");
  editBtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;

  editBtn.addEventListener("click", () => {});
});
// Sorry em, mấy nay anh về quê bận việc gia đình nên chưa hoàn thiện bài tập được. Anh sẽ cố gắng hoàn thiện sau nha
