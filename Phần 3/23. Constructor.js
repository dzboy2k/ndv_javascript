var cacmonan = {
      ten:"Thịt kho tàu",
      nguyenlieu:"Thịt lợn",
      gia:200
};

var monanso2 = cacmonan; // khi gán giá trị đối tượng thì 2 biến sẽ mặc định dùng chung vùng nhớ, biến này thay đổi thì biến kia thay đổi theo
monanso2.ten = "Bò cuốn lá lốt";

// console.log(cacmonan);
// console.log(monanso2);

// Khai báo hàm constructor
function MonAn(t, nl, g) {
      this.ten = t; // Tạo đối tượng mới
      this.nguyenlieu = nl;
      this.gia = g;
}
var mon1 = new MonAn('Rau xào','Rau muống',900);
var mon2 = new MonAn('Đậu rán','Đậu phụ',400);
console.log(mon1);
console.log(mon2);