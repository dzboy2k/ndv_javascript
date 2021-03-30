var x = 1, y =2 ;
var z = "hello ";
var a = "obama ";
// Toán tử: cộng, trừ, nhân, chia, chia lấy dư
// console.log(x+y);
// console.log(z);
// console.log(z + y); // Nối chữ với số
// console.log(z + a); // Nối chữ với chữ
// console.log(x - y);
// console.log(x*y*y);
// console.log(y/x);

var b = 5 ;
// console.log(5%3); // Chia lấy dư
// console.log(1%3);
// console.log(3%3);

// chaythu = function(){}
function chaythu() { // Khai báo hàm
      // Mỗi lần click thì tăng giá trị của b lên 1 đơn vị
      b = b + 1 ;

      // Nhưng khi đến số 5 lại quay trở về 0
      console.log('Giá trị của b là : ' + ((b%5)+1));
}