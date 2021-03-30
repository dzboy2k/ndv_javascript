document.addEventListener("DOMContentLoaded", function () {
      // console.log("tesst");

      // Khai báo một số đối tượng cần sử dụng
      var nut = document.querySelectorAll(".chuyenslide ul li");
      // console.log(nut);
      // nut trả về một mảng nút
      var slides = document.querySelectorAll(".cacslide ul li");
      // console.log(slides);

      // Viết hàm tự chuyển slide
      var thoigian = setInterval(function () {autoSlide();}, 3000); // 1000=1s, sau khoảng thời gian sẽ gọi hàm

      // Bắt sự kiện click cho từng nút
      for (var i = 0; i < nut.length; i++) {
            nut[i].addEventListener("click", function () {
                  // console.log(this);

                  // Trước tiên hủy tự chuyển động của hàm setInterval
                  clearInterval(thoigian);

                  // Bỏ tất cả màu đen đi
                  for (var i = 0; i < nut.length; i++) {
                        nut[i].classList.remove("kichhoat");
                  }
                  this.classList.add("kichhoat");
                  // Hết phần xử lý chuyển màu của nút slide

                  // Xử lý phần tính vị trí
                  // console.log(this.previousElementSibling); // In ra phần tử ở đàng trước
                  var nutkichhoat = this;
                  var vitrinut = 0;
                  for (vitrinut = 0; nutkichhoat = nutkichhoat.previousElementSibling; vitrinut++) {
                        // console.log("Biến vitrinut = " + vitrinut);
                        // console.log("Phần tử nút kích hoạt là " + nutkichhoat);
                  }
                  // Hết vòng lặp này thì biến vitrinut = số thứ tự
                  // console.log("Vị trí của phần tử có class là kích hoạt là = " + vitrinut);

                  // Cho slide tương ứng hiển thị
                  // Cho tất cả slide ẩn đi = cách remove class active
                  for (var i = 0; i < slides.length; i++) {
                        slides[i].classList.remove("active");
                        slides[vitrinut].classList.add("active");
                  }
            })
      } // Hết sự kiện cho nút  

      function autoSlide() {
            // console.log("Tada !");

            // Bước 1: Xem slide nào đang hiển thị
            var vitrislide = 0;
            var slideHienTai = document.querySelector(".cacslide ul li.active");
            // console.log(slideHienTai.previousElementSibling);
            // console.log(slideHienTai);

            // Sublime text: View -> Word Wrap : Tự động chỉnh code
            for (vitrislide = 0; slideHienTai = slideHienTai.previousElementSibling; vitrislide++) {}

            // Bước 3: Nếu mà chưa đến slide cuối cùng tức là vitrislide < (slides.length - 1) -> hoạt động bình thường
            if (vitrislide < (slides.length - 1)) {
                  // Bước 2: Cho phần tử tiếp theo của slide hiển thị ra
                  // Cho ẩn hết đi
                  for (var i = 0; i < slides.length; i++) {
                        slides[i].classList.remove("active");
                        nut[i].classList.remove("kichhoat");
                  }

                  // Cho phần tử tiếp theo của slide hiển thị ra
                  slides[vitrislide].nextElementSibling.classList.add("active");
                  nut[vitrislide].nextElementSibling.classList.add("kichhoat");
            }
            else {
                  for (var i = 0; i < slides.length; i++) {
                        slides[i].classList.remove("active");
                        nut[i].classList.remove("kichhoat");
                  }
                  slides[0].classList.add("active");
                  nut[0].classList.add("kichhoat");
            }
            console.log("Vị trí của slide hiện tại là " + vitrislide);
      }
})

