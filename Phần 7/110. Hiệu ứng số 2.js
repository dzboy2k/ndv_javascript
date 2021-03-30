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