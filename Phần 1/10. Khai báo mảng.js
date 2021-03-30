// Cách số 1: khai báo có khởi tạo sẵn, khai báo tất cả phần tử trong một
var hv = ["Tài","Đông","Tiến"];
hv[3] = "Tài"; // Gán giá trị cho mảng
// console.log(hv[3]); 

// Cách 2: Khai báo mảng rỗng, sau đó đưa các phần tử vào mảng này
var hv2 = [];
hv2[0] ="Lưu";
hv2[1] ="Hùng";
hv2[2] ="Việt";

// console.log(hv2[2]);
// console.log(hv2[1]);
// console.log(hv2[0]);

// Cách 3: Dùng từ khóa new và ngoặc tròn
var hv3 = new Array('Kiệt','Linh','Nga');
console.log(hv3[2]);
console.log(hv3[1]);
console.log(hv3[0]);
hv3[3] = "Tài";
console.log(hv[3]); 

var hv4=['viet','Huy'];
