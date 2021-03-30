document.addEventListener("DOMContentLoaded", function () {
      // Bắt sự kiện cuộn chuột
      var trangthai = "duoi300";

      // Lấy về menu
      var doituongmenu = document.querySelector(".menu");
      // console.log(doituongmenu);

      window.addEventListener("scroll", function () {
            // console.log(window.pageYOffset);
            if (window.pageYOffset > 300) {
                  if (trangthai == "duoi300") {
                        console.log("Ok rồi");
                        trangthai = "tren300";
                        doituongmenu.classList.add("nholai");
                  }

            }
            else{
                  if (trangthai == "tren300") {
                        doituongmenu.classList.remove("nholai");
                        trangthai = "duoi300";
                  }
            }
      })
})