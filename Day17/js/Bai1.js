let content =
  "F8 123 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, assumenda! Exercitationem totam in enim id, voluptatem itaque, distinctio perferendis quibusdam illum perspiciatis ipsa? Illum velit inventore alias deleniti consectetur aperiam? F8 123 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, assumenda! Exercitationem totam in enim id, voluptatem itaque, distinctio perferendis quibusdam illum perspiciatis ipsa? Illum velit inventore alias deleniti consectetur aperiam? F8 123 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, assumenda! Exercitationem totam in enim id, voluptatem itaque, distinctio perferendis quibusdam illum perspiciatis ipsa? Illum velit inventore alias deleniti consectetur aperiam? F8 123 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, assumenda! Exercitationem totam in enim id, voluptatem itaque, distinctio perferendis quibusdam illum perspiciatis ipsa? Illum velit inventore alias deleniti consectetur aperiam?";
let keyword = "lorem";
let count = 0;
let highlighted = content.replace(new RegExp(keyword, "gi"), (match) => {
  count++;
  return `<span style="background-color: yellow;">${match}</span>`;
});

let html = `<p>Tìm kiếm với từ khóa <b>${keyword}</b></p>`;
html += `<p>${highlighted}</p>`;
html += `<p>Đã tìm thấy <b>${count}</b> kết quả với từ khóa <b>${keyword}</b></p>`;

document.body.innerHTML = html;
