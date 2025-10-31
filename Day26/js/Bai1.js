const ul = document.querySelector("ul");
const menu = document.querySelector("#menu");
ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("down")) {
    const li = e.target.parentElement;
    const nextElement = li.nextElementSibling;
    if (!nextElement) {
      return;
    }
    ul.insertBefore(nextElement, li);
  }

  if (e.target.classList.contains("up")) {
    const li = e.target.parentElement;
    const prevElement = li.previousElementSibling;
    if (!prevElement) {
      return;
    }
    ul.insertBefore(li, prevElement);
  }
});
ul.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    const active = document.querySelector("li.selected");
    if (active) {
      active.classList.remove("selected");
    }
    e.target.classList.add("selected");
  }
});
document.addEventListener("click", (e) => {
  menu.style.display = "none";

  if (e.target.tagName === "LI") return;
  const active = document.querySelector("li.selected");
  if (active) {
    active.classList.remove("selected");
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    overlay.style.visibility = "hidden";
  }
  if (e.altKey && e.shiftKey) {
    const item = document.querySelector("li.selected");
    if (!item) return;

    if (e.key === "ArrowDown") {
      const itemClone = item.cloneNode(true);
      itemClone.classList.remove("selected");

      const nextElement = item.nextElementSibling;
      if (nextElement) {
        ul.insertBefore(itemClone, nextElement);
      } else {
        ul.append(itemClone);
      }
    }

    if (e.key === "ArrowUp") {
      const itemClone = item.cloneNode(true);
      itemClone.classList.remove("selected");
      ul.insertBefore(itemClone, item);
    }
  }
});

let selectedItem = null;
ul.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  if (e.target.tagName === "LI") {
    selectedItem = e.target;
    menu.style.display = "block";
    menu.style.left = `${e.clientX}px`;
    menu.style.top = `${e.clientY}px`;
  }
});
const overlay = document.querySelector("#overlay");
const delBtn = menu.querySelector("#delete");
delBtn.addEventListener("click", () => {
  if (selectedItem) {
    selectedItem.remove();
  }
});
const nameInput = document.querySelector("#nameInput");
const renameBtn = document.querySelector("#rename");
renameBtn.addEventListener("click", () => {
  overlay.style.visibility = "visible";
  const itemClone = selectedItem.cloneNode(true);
  const span = itemClone.querySelectorAll("span");
  span.forEach((span) => {
    span.remove();
  });
  const oldName = itemClone.textContent.trim();
  nameInput.value = oldName;
});

const saveRename = document.querySelector("#saveRename");
saveRename.addEventListener("click", () => {
  const newName = nameInput.value.trim();
  const itemClone = selectedItem.cloneNode(true);

  const delspans = itemClone.querySelectorAll("span");
  delspans.forEach((span) => {
    span.remove();
  });

  itemClone.textContent = newName + " ";

  const spans = selectedItem.querySelectorAll("span");
  spans.forEach((span) => {
    spanClone = span.cloneNode(true);
    itemClone.append(spanClone);
  });

  const ulEl = selectedItem.parentElement;
  ulEl.replaceChild(itemClone, selectedItem);
  selectedItem = itemClone;

  overlay.style.visibility = "hidden";
});

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.style.visibility = "hidden";
  }
});
