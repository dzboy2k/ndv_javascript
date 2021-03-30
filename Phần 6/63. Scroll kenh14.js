document.addEventListener("DOMContentLoaded", function () {
      // Khai báo một số biến cần dùng
      var menudo = document.querySelector(".menu");
      var trangthaimenudo = "duoi100";
      var chungtoi = document.querySelector(".chungtoi");
      var vtkhoivang = chungtoi.offsetTop; // Vị trí so với phần trên
      var trangthaikhoivang = "duoi";
      var khoangcachhienthi = 600; // Đây là khoảng cách mà khối .chungtoi hiển thị
      var chancuoi = vtkhoivang + khoangcachhienthi;
      console.log(chancuoi);

      // Hiệu ứng load bằng javascript
      var phantuload = document.querySelector(".s3");
      var trangthais3 = "duoi";
      var vitris3 = phantuload.offsetTop - 300;

      window.addEventListener("scroll", function () {
            // console.log(window.pageYOffset);
            if (window.pageYOffset > 100) {
                  if (trangthaimenudo == "duoi100") {
                        trangthaimenudo = "tren100";
                        menudo.classList.add("menuden");
                  }
            }
            else {
                  if (trangthaimenudo == "tren100") {
                        trangthaimenudo = "duoi100";
                        menudo.classList.remove("menuden");
                  }
            }

            // Xử lý cho khối vàng
            if ((window.pageYOffset > vtkhoivang) && (window.pageYOffset < chancuoi)) {
                  if (trangthaikhoivang == "duoi") {
                        trangthaikhoivang = "danghienthi";
                        chungtoi.classList.add("vangdunglai");
                  }
            }
            else if ((window.pageYOffset < vtkhoivang) || (window.pageYOffset > chancuoi)) {
                  if (trangthaikhoivang == "danghienthi") {
                        trangthaikhoivang = "duoi";
                        chungtoi.classList.remove("vangdunglai");
                  }
            }

            // Xử lý phần tử load
            if (window.pageYOffset > vitris3) {
                  if (trangthais3 == "duoi") {
                        trangthais3 = "tren";
                        phantuload.classList.add("dilen");
                  }
            }

      })
})