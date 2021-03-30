var x = "Điện thoại iphone, android, nokia";
console.log(x.length); // Độ dài của chuỗi
console.log(x.indexOf('iphone')); // Tìm chuỗi
// Nếu có iphone trong x, thì trả về vị trí của từ đó
// Nếu không tìm thấy thì trả về là -1
var vitri = x.indexOf('iphone');
if (vitri!=-1) {
      console.log("Tìm thấy");
      var moi = x.replace('iphone','Bphone'); // Thay thế từ trong chuỗi, không làm thay đổi chuỗi gốc
      console.log(moi);
}
else{
      console.log("Không tìm thấy");
}

x = "iphone, android, nokia, blackberry, samsung";
var mang = x.split(', '); // Tách chuỗi thành thành mảng, ngăn cách nhau bởi kí tự được truyền vào
for (var i = 0; i < mang.length; i++) {
      console.log(mang[i]);
}