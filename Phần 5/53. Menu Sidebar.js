document.addEventListener("DOMContentLoaded",function(){
      // Khai báo các biến cần dùng
      var nut = document.querySelector(".nut");
          menutrai = document.querySelector(".menutrai"),
          den = document.querySelector(".den");
          trang = document.querySelector(".mautrang");
          khoito = document.querySelector(".noidungto");

      // Khi click vào nút xanh
      nut.onclick = function(){
            den.classList.add("len");

            // Cho cả khối to dịch sang phải
            // khoito.classList.add("dichphai");
            trang.classList.add("trangquay");
            menutrai.classList.remove("vetrai");
      }

      // Khi click vào đen
      den.onclick = function(){
            den.classList.remove("len");
            khoito.classList.remove("dichphai");
            trang.classList.remove("trangquay");
            menutrai.classList.add("vetrai");
      }
      
},false);