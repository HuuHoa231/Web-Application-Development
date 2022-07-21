const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const input1 = $(".input-1");
const input2 = $(".input-2");
const input3 = $(".input-3");

const button1 = $(".btn-1");
const button2 = $(".btn-2");
const button3 = $(".btn-3");

button1.addEventListener("click", function (e) {
  e.preventDefault();
  if (input1.value.trim() !== "" && input2.value.trim() !== "") {
    input3.value = input1.value + input2.value;
  }
});

button2.addEventListener("click", function (e) {
  e.preventDefault();
  button2.innerText = input3.value.split("").length;
});

button3.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    input1.value.includes(input2.value) &&
    input1.value.trim() !== "" &&
    input2.value.trim() !== ""
  ) {
    const check = confirm(
      "Bạn muốn xoá kí tự giống nhau ở ô thứ nhất này không?"
    );
    if (check) {
      input1.value = input1.value.replaceAll(input2.value, "");
      alert("Xoá thành công");
    } else {
      alert("Không đồng ý thì thôi");
    }
  } else {
    alert("Không tìn thấy giá trị nào giống nhau");
  }
});
