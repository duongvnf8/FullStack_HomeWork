const form = document.querySelector("#todo-form");
const input = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");

function sanitize(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function saveTasks() {
  const tasks = [...taskList.querySelectorAll("span")].map(
    (el) => el.textContent
  );
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const saved = JSON.parse(localStorage.getItem("tasks")) || [];
  saved.forEach(addTask);
}

function addTask(text) {
  const li = document.createElement("li");
  li.classList.add(
    "flex",
    "justify-between",
    "items-center",
    "bg-[#8758ff]",
    "py-[12px]",
    "px-[16px]",
    "rounded-md"
  );

  const span = document.createElement("span");
  span.textContent = text;

  const btnGroup = document.createElement("div");
  btnGroup.classList.add("flex", "gap-3");

  const editBtn = document.createElement("button");
  editBtn.innerHTML = `<i class="fa-solid fa-pen-to-square cursor-pointer"></i>`;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = `<i class="fa-solid fa-trash cursor-pointer"></i>`;

  deleteBtn.addEventListener("click", () => {
    li.remove();
    saveTasks();
  });

  editBtn.addEventListener("click", () => {
    const editForm = document.createElement("form");
    editForm.classList.add(
      "w-full",
      "flex",
      "items-center",
      "justify-center",
      "text-sm"
    );

    const inputEdit = document.createElement("input");
    inputEdit.type = "text";
    inputEdit.value = span.textContent;
    inputEdit.classList.add(
      "outline-none",
      "border",
      "border-[#8758ff]",
      "py-2",
      "px-4",
      "w-[300px]"
    );

    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.textContent = "Add Task";
    submitBtn.classList.add(
      "bg-[#8758ff]",
      "cursor-pointer",
      "border-none",
      "p-[0.55rem]"
    );

    editForm.append(inputEdit, submitBtn);

    taskList.replaceChild(editForm, li);
    inputEdit.focus();

    editForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const newText = sanitize(inputEdit.value.trim());
      if (!newText) return alert("Vui lòng nhập nội dung!");

      const exists = [...taskList.querySelectorAll("span")].some(
        (el) => el.textContent.toLowerCase() === newText.toLowerCase()
      );
      if (exists) return alert("Task đã tồn tại!");

      addTask(newText);
      editForm.remove();
      saveTasks();
    });
  });

  btnGroup.append(editBtn, deleteBtn);
  li.append(span, btnGroup);
  taskList.appendChild(li);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = sanitize(input.value.trim());
  if (!text) return alert("Vui lòng nhập công việc!");

  const exists = [...taskList.querySelectorAll("span")].some(
    (el) => el.textContent.toLowerCase() === text.toLowerCase()
  );
  if (exists) return alert("Task đã tồn tại!");

  addTask(text);
  saveTasks();
  input.value = "";
});
loadTasks();
