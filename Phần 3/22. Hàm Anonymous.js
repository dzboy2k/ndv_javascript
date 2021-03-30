// anonymous: vô danh (không tên)
var z = function (x,y) { // Hàm anonymous
      return (x+y)/2;
}

console.log(z(2,4));

// clousuze function: không gian đóng dành riêng  cho function
function chao() {
      var ten = "VietND";
      var thongbao = function () { // Sử dụng biến trong khu vực của hàm chao()
            console.log("Cafe không hả " + ten);
      }

      ten = ten + " - Đẹp trai";
      return thongbao; // Tại vị trí return mới gọi hàm thongbao()
}
var h = chao(); // h lúc này là một hàm anonymous
h();

