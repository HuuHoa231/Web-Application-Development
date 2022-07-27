const calculation = document.querySelectorAll(".btn");
const input1 = document.querySelector(".input-1");
const input2 = document.querySelector(".input-2");
const input3 = document.querySelector(".input-3");

calculation.forEach(function (item) {
  item.addEventListener("click", function () {
    let a = parseInt(input1.value);
    let b = parseInt(input2.value);
    let result = 0;
    if (input1.value == "" || input2.value == "") {
      alert("Bạn chưa nhập đầy đủ thông tin");
    } else if (!a || !b) {
      alert("Giá trị bạn không hợp lệ");
      input1.value = "";
      input2.value = "";
    } else {
      switch (item.innerHTML) {
        case "+":
          result = a + b;
          break;
        case "-":
          result = a - b;
          break;
        case "*":
          result = a * b;
          break;
        case "/":
          result = a / b;
          break;
      }
      input3.value = result;
    }
  });
});
