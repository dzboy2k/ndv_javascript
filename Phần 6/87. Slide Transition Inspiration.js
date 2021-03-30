// 1. Xác định slide hiện tại và slide tiếp theo khi click nút next
// Sublime text: View -> Word Wrap : Tự động chỉnh code

// console.log("OK");

var nutPhai = document.querySelector(".nuts b.phai");
var nutTrai = document.querySelector(".nuts b.trai");
// console.log(nutPhai);
var slides = document.querySelectorAll(".slides ul li");
// console.log(slides);
var chiSoHienTai = 0;
var soLuongSlide = slides.length;
// console.log(soLuongSlide);
var trangThai = "dangDungYen";

// Gọi sự kiện click vào nút phải
var chuyenSlideChoNutPhai = function(){
      // console.log("Click được chưa");

      //  Kiểm tra luôn trạng thái, nếu đang chuyển động 
      if(trangThai == "dangChuyenDong") {
            return false; // dừng chương trình
      }

      // Đến dòng này tức là đang đứng yên, xử lý chuyển động
      // Đánh dấu là đang chuyển động
      trangThai = "dangChuyenDong";
      var trangThaiCua2ChuyenDong = 0;

      var phanTuHienTai = slides[chiSoHienTai];
      // Xác định chỉ số của phần tử tiếp theo dựa trên phần tử hiện tại
      if(chiSoHienTai < soLuongSlide-1){ // Chưa đến cuối
            chiSoHienTai = chiSoHienTai + 1;
      }
      else{ // là phần tử cuối cùng rồi
            chiSoHienTai = 0;
      }
      var phanTuTiepTheo = slides[chiSoHienTai];
      // console.log(phanTuHienTai);
      // console.log(phanTuTiepTheo);

      // Check chuyển động kết thúc
      var xuLyHienTaiKetThucCD = function () {
            // console.log("Slide hiện tại đã xong rồi đó");
            this.classList.remove("dangxem");
            this.classList.remove("bienMatKhiAnNext");
            trangThaiCua2ChuyenDong++; // = 1
            if(trangThaiCua2ChuyenDong==2){
                  trangThai = "dangDungYen";
            }
            // console.log(slides[chiSoHienTai]);
      }
      var xuLyTiepTheoKetThucCD = function () {
            // console.log("Slide tiếp rheo đã xong rồi đó");
            this.classList.remove("diVaoKhiAnNext"); 
            this.classList.add("dangxem"); 
            trangThaiCua2ChuyenDong++; // = 2
            if(trangThaiCua2ChuyenDong==2){
                  trangThai = "dangDungYen";
            }
      }
      phanTuTiepTheo.addEventListener("webkitAnimationEnd",xuLyTiepTheoKetThucCD); // Check xem khi nào animation kết thúc
      phanTuHienTai.addEventListener("webkitAnimationEnd",xuLyHienTaiKetThucCD);

      // Tạo chuyển động sau khi xác định được 2 phần tử
      phanTuHienTai.classList.add("bienMatKhiAnNext");
      phanTuTiepTheo.classList.add("diVaoKhiAnNext")
};
nutPhai.addEventListener("click",chuyenSlideChoNutPhai);
// Xong nút phải

var chuyenSlideChoNutTrai = function () {
      // console.log("Ok");
      if(trangThai == "dangChuyenDong"){
            return false;
      }
      trangThai = "dangChuyenDong";

      // Xác đinh được 2 phần tử, hiện tại và tiếp theo
      // phanTuHienTai trước
      var phanTuHienTai = slides[chiSoHienTai];
      var trangThaiCua2ChuyenDong = 0;
      // phanTuTiepTheo
      if(chiSoHienTai>0){ // Chưa đến phần tử đầu tiên
            chiSoHienTai--;
      }
      else{ // Đang ở phần tử đầu tiên, không lùi được nữa, cho chuyển sang phần tử thứ 5
            chiSoHienTai = soLuongSlide - 1;
      }
      var phanTuTiepTheo = slides[chiSoHienTai];
      // console.log(phanTuTiepTheo);
      // ----------

      var xuLyHienTaiKetThucCD = function () {
            // console.log("ht");
            this.classList.remove("dangxem");
            this.classList.remove("bienMatKhiAnPrev");
            trangThaiCua2ChuyenDong++;
            if (trangThaiCua2ChuyenDong == 2) {
                  trangThai = "dangDungYen";
            }
      }
      var xuLyTiepTheoKetThucCD = function () {
            // console.log("tiếp theo");
            this.classList.add("dangxem");
            this.classList.remove("diVaoKhiAnPrev");
            trangThaiCua2ChuyenDong++;
            if (trangThaiCua2ChuyenDong == 2) {
                  trangThai = "dangDungYen";
            }
      }
      phanTuHienTai.addEventListener("webkitAnimationEnd",xuLyHienTaiKetThucCD);
      phanTuTiepTheo.addEventListener("webkitAnimationEnd",xuLyTiepTheoKetThucCD);

      phanTuHienTai.classList.add("bienMatKhiAnPrev");
      phanTuTiepTheo.classList.add("diVaoKhiAnPrev");
}
nutTrai.addEventListener("click",chuyenSlideChoNutTrai);

