// Ví dụ về cách viết tổng quát bằng hàm là phải truyền vào tham số  
function tinhtbc() { // Sử dụng 1 lần
      var x = 10;
      var y = 12;
      console.log((x + y) / 2);
}
tinhtbc();

function tinh2(x, y) { // Sử dụng nhiều lần khi được gọi
      console.log("Trung bình cộng của " + x + " và " + y + " là : " + ((x + y) / 2));
}
tinh2(10, 12);
tinh2(999, 177);
tinh2(12, 127);

// Cách gửi tham số thông qua thẻ html
document.addEventListener("DOMContentLoaded", function () {
      var nut = document.getElementsByClassName("nuttongquat");
      // console.log(nut);
      for (var i = 0; i < nut.length; i++) {
            nut[i].onclick = function () {
                  // console.log("lick");

                  console.log(this.getAttribute('data-matkhau'));
                  // this: hàm dược click, getAttribute:lấy giá trị của data-matkhau
                  console.log(this.getAttribute('data-thongtin2'));
            }
      }
}, false);