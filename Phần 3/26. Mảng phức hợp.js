// Bình thường mảng dữ liệu lấy từ cơ sở dữ liệu thông qua API 
var mangdl = [
      {
            id:1,
            anh: "img/26/26.1.jpg",
            ten: "Hồ Thị Thảo",
            noidungcm: "Trước tình trạng hàng loạt chú chó ở khu Thảo Điền, quận 2, TP HCM nghi bị đầu độc, rất nhiều người nước ngoài",
      },
      {
            id:2,
            anh: "img/26/26.2.jpg",
            ten: "Trương Quí Hải",
            noidungcm: "Trước tình trạng hàng loạt chú chó ở khu Thảo Điền, quận 2, TP HCM nghi bị đầu độc, rất nhiều người nước ngoài",
      }
];
// Chọn view -> Wordwrap để chữ tự động xuống dòng khi bị tràn trong sublime text

// console.log(mangdl); // In ra mảng dữ liệu
// console.log(mangdl[0].anh); // Truy xuất đến thuộc tính từng đối tượng trong mảng
// console.log(mangdl[0].ten);
// console.log(mangdl[0].noidungcm);
// console.log(mangdl[0]['noidungcm']); // Cách 2 dùng mảng truy suất đến từng thuộc tính của đối tượng

// Duyệt mảng
for (var i = 0; i < mangdl.length; i++) {
      // console.log(mangdl[i].ten); // In ra tất cả thuộc tính tương ứng có trong mảng

      // In ra template string
      var noidung1khoi = `
            <div class="kcm" id="kcm-${mangdl[i].id}">
                  <img src="${mangdl[i].anh}" alt="" class="float xs-left pr-1"> 
                  <b>${mangdl[i].ten}</b> <span>${mangdl[i].noidungcm}</span>
            </div>`
      console.log(noidung1khoi);
}
