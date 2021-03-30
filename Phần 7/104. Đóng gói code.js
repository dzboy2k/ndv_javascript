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
      if (nutnao == "nutTrai") {
            if (chiSoHienTai > 0) { // Chưa đến phần tử đầu tiên
                  chiSoHienTai--;
            }
            else { // Đang ở phần tử đầu tiên, không lùi được nữa, cho chuyển sang phần tử thứ 5
                  chiSoHienTai = soLuongSlide - 1;
            }
      }
      else if (nutnao == "nutPhai") {
            if (chiSoHienTai < soLuongSlide - 1) { // Chưa đến cuối
                  chiSoHienTai++;
            }
            else { // Là phần tử cuối cùng rồi
                  chiSoHienTai = 0;
            }
      }
      var phanTuTiepTheo = slides[chiSoHienTai];

      // Sau khi xác định được 2 phần tử rồi thì xử lý đến chuyển động
      // Check chuyển động kết thúc
      var xuLyHienTaiKetThucCD = function () {
            this.classList.remove("dangxem");
            if (nutnao == "nutTrai") {
                  this.classList.remove("bienMatKhiAnPrev");
            }
            else if (nutnao == "nutPhai") {
                  this.classList.remove("bienMatKhiAnNext");
            }
            trangThaiCua2ChuyenDong++; // =1
            if (trangThaiCua2ChuyenDong == 2) {
                  trangThai = "dangDungYen";
            }
      }
      var xuLyTiepTheoKetThucCD = function () {
            if (nutnao == "nutTrai") {
                  this.classList.remove("diVaoKhiAnPrev");
            }
            else if (nutnao == "nutPhai") {
                  this.classList.remove("diVaoKhiAnNext");
            }
            this.classList.add("dangxem");
            trangThaiCua2ChuyenDong++; // =2
            if (trangThaiCua2ChuyenDong == 2) {
                  trangThai = "dangDungYen";
            }
      }

      // endAnimation check
      phanTuTiepTheo.addEventListener("webkitAnimationEnd", xuLyTiepTheoKetThucCD); // Check xem khi nào animation kết thúc
      phanTuHienTai.addEventListener("webkitAnimationEnd", xuLyHienTaiKetThucCD);
      
      // Khi chuyển động
      // Tạo chuyển động sau khi xác định được 2 phần tử
      if (nutnao == "nutTrai") {
            phanTuHienTai.classList.add("bienMatKhiAnPrev");
            phanTuTiepTheo.classList.add("diVaoKhiAnPrev");
      }
      else if (nutnao == "nutPhai") {
            phanTuHienTai.classList.add("bienMatKhiAnNext");
            phanTuTiepTheo.classList.add("diVaoKhiAnNext")
      }
}
var chuyenSlideChoNutPhai = function () {
      xacDinh2SlideVaChuyenDong("nutPhai");
};
var chuyenSlideChoNutTrai = function () {
      xacDinh2SlideVaChuyenDong("nutTrai");
}
nutPhai.addEventListener("click", chuyenSlideChoNutPhai);
nutTrai.addEventListener("click", chuyenSlideChoNutTrai);

