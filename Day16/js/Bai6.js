let chessBoard = 8;
let html = `<table>`;
for (let i = 1; i <= chessBoard; i++) {
  html += `<tr>`;
  for (let j = 1; j <= chessBoard; j++) {
    html +=
      (i + j) % 2 === 0
        ? '<td class="even-square"></td>'
        : '<td class="odd-square"></td>';
  }
  html += "</tr>";
}
html += `</table>`;
document.body.innerHTML = html;
