let password = "DuongVuNhu@300502";
let uppercaseCount = 0;
let lowercaseCount = 0;
let numberCount = 0;
let characterCount = 0;

for (let i = 0; i < password.length; i++) {
  let temp = password.charCodeAt(i);
  if (temp >= 65 && temp <= 90) {
    uppercaseCount++;
  } else if (temp >= 97 && temp <= 122) {
    lowercaseCount++;
  } else if (temp >= 48 && temp <= 57) {
    numberCount++;
  } else {
    characterCount++;
  }
}

if (password.length < 8) {
  console.log("Mật khẩu phải ít nhất 8 ký tự");
} else if (uppercaseCount < 2) {
  console.log("Mật khẩu phải ít nhất 2 chữ hoa");
} else if (lowercaseCount < 2) {
  console.log("Mật khẩu phải ít nhất 2 chữ thường");
} else if (numberCount < 1) {
  console.log("Mật khẩu phải ít nhất 1 số");
} else if (characterCount < 1) {
  console.log("Mật khẩu phải ít nhất 1 ký tự đặc biệt");
} else {
  console.log("Mật khẩu mạnh");
}
