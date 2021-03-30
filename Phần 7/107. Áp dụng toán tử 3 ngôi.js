// nhanvao = (dieukien) ? "Đúng" : "Sai";
//                (1)      (2)      (3)


// if (chiSoHienTai > 0) { chiSoHienTai--; }
// else { chiSoHienTai = soLuongSlide - 1; }
// var chiSoHienTai = 0, soLuongSlide=99;
// chiSoHienTai = (chiSoHienTai > 0) ? (chiSoHienTai-1) : (soLuongSlide - 1) ;
// console.log(chiSoHienTai);


// if (chiSoHienTai < soLuongSlide - 1) {chiSoHienTai++;
// } else { chiSoHienTai = 0; }
// // chiSoHienTai = (1) ? (2) : (3);
// chiSoHienTai = (chiSoHienTai < soLuongSlide - 1) ? (chiSoHienTai+1) : 0;


// if (nutnao == "nutTrai") {
//       chiSoHienTai = (chiSoHienTai > 0) ? (chiSoHienTai-1) : (soLuongSlide - 1) ;
// }
// else {
//       chiSoHienTai = (chiSoHienTai < soLuongSlide - 1) ? (chiSoHienTai++) : 0;
// }
// // chiSoHienTai = (1) ? (2) : (3);
// chiSoHienTai = (nutnao == "nutTrai") ? ((chiSoHienTai > 0) ? (chiSoHienTai-1) : (soLuongSlide - 1)) : ((chiSoHienTai < soLuongSlide - 1) ? (chiSoHienTai+1) : 0);


// if (nutnao == "nutTrai") {
//       this.classList.remove("bienMatKhiAnPrev");
// } // Đây là một hành động
// else {
//       this.classList.remove("bienMatKhiAnNext");
// }
// // Toán tử 3 ngôi trả về một giá trị, không trả về 1 hành động
// // this.classList.remove((1) ? (2) : (3));
// this.classList.remove((nutnao == "nutTrai") ? ("bienMatKhiAnPrev") : ("bienMatKhiAnNext"));


// if (trangThaiCua2ChuyenDong == 2) {
//       trangThai = "dangDungYen";
// }
// else{
//       trangThai = trangThai;
// }
// // trangThai = (1) ? (2) : (3);
// trangThai = (trangThaiCua2ChuyenDong == 2) ? ("dangDungYen") : (trangThai);


// if (nutnao == "nutTrai") {
//       this.classList.remove("diVaoKhiAnPrev");
// }
// else {
//       this.classList.remove("diVaoKhiAnNext");
// }
// // (4) = (1) : (2) : (3);
// tenclass = (nutnao == "nutTrai") ? ("diVaoKhiAnPrev") : ("diVaoKhiAnNext");
// this.classList.remove(tenclass);
// this.classList.remove((nutnao == "nutTrai") ? ("diVaoKhiAnPrev") : ("diVaoKhiAnNext"));


// if (nutnao == "nutTrai") {
//       phanTuHienTai.classList.add("bienMatKhiAnPrev");
//       phanTuTiepTheo.classList.add("diVaoKhiAnPrev");
// }
// else if (nutnao == "nutPhai") {
//       phanTuHienTai.classList.add("bienMatKhiAnNext");
//       phanTuTiepTheo.classList.add("diVaoKhiAnNext")
// }
// // phanTuHienTai.classList.add((1) ? (2) : (3));
// // phanTuTiepTheo.classList.add((1) ? (2) : (3));
// phanTuHienTai.classList.add((nutnao == "nutTrai") ? ("bienMatKhiAnPrev") : ("bienMatKhiAnNext"));
// phanTuTiepTheo.classList.add((nutnao == "nutTrai") ? ("diVaoKhiAnPrev") : ("diVaoKhiAnNext"));


var nutPhai = document.querySelector(".nuts b.phai");
var nutTrai = document.querySelector(".nuts b.trai");
var slides = document.querySelectorAll(".slides ul li");
var chiSoHienTai = 0;
var soLuongSlide = slides.length;
var trangThai = "dangDungYen";
function xacDinh2SlideVaChuyenDong(nutnao) {
      // Kiểm tra luôn trạng thái, nếu đang chuyển động
      if (trangThai == "dangChuyenDong") {
            return false;
      }
      // Đến dòng này tức là đang đứng yên, xử lý chuyển động
      // Đánh dấu là đang chuyển động
      trangThai = "dangChuyenDong";
      var trangThaiCua2ChuyenDong = 0;
      var phanTuHienTai = slides[chiSoHienTai];

      // Xác định chỉ số của phần tử tiếp theo dựa trên phần tử hiện tại
      chiSoHienTai = (nutnao == "nutTrai") ? ((chiSoHienTai > 0) ? (chiSoHienTai - 1) : (soLuongSlide - 1)) : ((chiSoHienTai < soLuongSlide - 1) ? (chiSoHienTai + 1) : 0);
      var phanTuTiepTheo = slides[chiSoHienTai];

      // Sau khi xác định được 2 phần tử rồi thì xử lý đến chuyển động
      // Check chuyển động kết thúc
      var xuLyHienTaiKetThucCD = function () {
            this.classList.remove("dangxem");
            this.classList.remove((nutnao == "nutTrai") ? ("bienMatKhiAnPrev") : ("bienMatKhiAnNext"));
            trangThaiCua2ChuyenDong++; // =1
            trangThai = (trangThaiCua2ChuyenDong == 2) ? ("dangDungYen") : (trangThai);
      }
      var xuLyTiepTheoKetThucCD = function () {
            this.classList.remove((nutnao == "nutTrai") ? ("diVaoKhiAnPrev") : ("diVaoKhiAnNext"));
            this.classList.add("dangxem");
            trangThaiCua2ChuyenDong++; // =2
            trangThai = (trangThaiCua2ChuyenDong == 2) ? ("dangDungYen") : (trangThai);
      }

      // endAnimation check
      phanTuTiepTheo.addEventListener("webkitAnimationEnd", xuLyTiepTheoKetThucCD); // Check xem khi nào animation kết thúc
      phanTuHienTai.addEventListener("webkitAnimationEnd", xuLyHienTaiKetThucCD);

      // Khi chuyển động
      // Tạo chuyển động sau khi xác định được 2 phần tử
      phanTuHienTai.classList.add((nutnao == "nutTrai") ? ("bienMatKhiAnPrev") : ("bienMatKhiAnNext"));
      phanTuTiepTheo.classList.add((nutnao == "nutTrai") ? ("diVaoKhiAnPrev") : ("diVaoKhiAnNext"));
}
var chuyenSlideChoNutPhai = function () {
      xacDinh2SlideVaChuyenDong("nutPhai");
};
var chuyenSlideChoNutTrai = function () {
      xacDinh2SlideVaChuyenDong("nutTrai");
}
nutPhai.addEventListener("click", chuyenSlideChoNutPhai);
nutTrai.addEventListener("click", chuyenSlideChoNutTrai);
