const btnAdd = document.querySelectorAll("tbody button");
console.log(btnAdd);
const cartTable = document.querySelector(".js-addcart");
const cartEmpty = document.querySelector("p");
const totalQuantityEl = document.querySelector(".js-quantity");
const totalPriceEl = document.querySelector(".js-total");
const updateCartBtn = document.querySelector(".js-submit-cart");
const deleteCartBtn = document.querySelector(".js-delete-cart");
const totalRow = document.querySelector(".total");

let productCount = 1;

btnAdd.forEach((btn) => {
  btn.addEventListener("click", () => {
    const tr = btn.parentElement.parentElement;
    const name = tr.children[1].innerText;
    const price = Number(tr.children[2].innerText);
    const quantityInput = tr.querySelector("input");
    let quantity = Number(quantityInput.value);

    cartEmpty.classList.add("nonactive");
    cartTable.classList.add("active");

    const existingRow = Array.from(cartTable.querySelectorAll("tr")).find(
      (row) => row.children[1] && row.children[1].innerText === name
    );

    if (existingRow) {
      const qtyInput = existingRow.querySelector("input");
      const newQty = Number(qtyInput.value) + quantity;
      qtyInput.value = newQty;
      existingRow.children[4].innerText = newQty * price;
    } else {
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
        <td>${productCount}</td>
        <td>${name}</td>
        <td>${price}</td>
        <td><input type="number" min="1" value="${quantity}" /></td>
        <td>${price * quantity}</td>
        <td><button class="delete-btn">Xóa</button></td>
      `;
      totalRow.before(newRow);
      productCount++;

      const deleteBtn = newRow.querySelector(".delete-btn");
      deleteBtn.addEventListener("click", () => {
        const ok = confirm("Are you sure?");
        if (ok) {
          newRow.remove();
          updateTotal();
          alert("Xóa sản phẩm thành công");

          const hasProduct = cartTable.querySelectorAll("tr").length > 2;
          if (!hasProduct) {
            cartEmpty.classList.add("active");
            cartTable.classList.add("nonactive");
            productCount = 1;
          }
        }
      });
    }
    updateTotal();
  });
});

updateCartBtn.addEventListener("click", () => {
  updateTotal();
  alert("Cập nhật giỏ hàng thành công");
});

deleteCartBtn.addEventListener("click", () => {
  const ok = confirm("Are you sure?");
  if (ok) {
    const rows = cartTable.querySelectorAll("tr");
    rows.forEach((row) => {
      if (
        !row.classList.contains("total") &&
        row.querySelector(".delete-btn")
      ) {
        row.remove();
      }
    });

    totalQuantityEl.innerText = "";
    totalPriceEl.innerText = "";
    productCount = 1;

    cartTable.style.display = "none";
    cartEmpty.style.display = "block";

    alert("Xóa giỏ hàng thành công");
  }
});

function updateTotal() {
  let totalQty = 0;
  let totalPrice = 0;

  const rows = cartTable.querySelectorAll("tr");
  rows.forEach((row) => {
    const qtyInput = row.querySelector("input");
    if (qtyInput) {
      const qty = Number(qtyInput.value);
      const price = Number(row.children[2].innerText);
      const subtotal = qty * price;
      row.children[4].innerText = subtotal;

      totalQty += qty;
      totalPrice += subtotal;
    }
  });

  totalQuantityEl.innerText = totalQty;
  totalPriceEl.innerText = totalPrice;
}
