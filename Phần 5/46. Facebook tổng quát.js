document.addEventListener("DOMContentLoaded", function () {
      // Biến sử dụng .declick
      var nut = document.getElementsByClassName("declick");
      var nd = document.getElementsByClassName("dehienthi");
      for (var i = 0; i < nut.length; i++) {
            nut[i].onclick = function () {
                  console.log(this.classList);
                  console.log(this.classList[1]); // classList : Danh sách class trong một thẻ được tìm thấy

                  if (this.classList[1] == "mautrang") { // Click vào cái đã hiển thị rồi

                        // Xử lý một kiểu
                        console.log("Đây là trường hợp chưa được xử lý");

                        this.classList.remove("mautrang"); // Bỏ màu trắng ở chính nó

                        // 3 dòng dưới là cho div của đối tượng được click ẩn đi 
                        var ndhienra = this.getAttribute("data-hienlen");
                        var phan_tu_hien_ra = document.getElementById(ndhienra);
                        phan_tu_hien_ra.classList.remove("ra");
                  }
                  else { // Click vào các cái còn lại
                     
                        // Cho tất cả bỏ màu trắng đi
                        // Trong thời gian nhất định chỉ có 1 phần tử được .mautrang
                        for (var k = 0; k < nut.length; k++) {
                              nut[k].classList.remove("mautrang");
                        }

                        // Đối tượng được click (this) thành màu trắng 
                        this.classList.toggle("mautrang"); // this: Hàm được click

                        // Lấy về cái data-hienlen
                        var ndhienra = this.getAttribute("data-hienlen");
                        // console.log(ndhienra);
                        var phan_tu_hien_ra = document.getElementById(ndhienra);
                        // console.log(phan_tu_hien_ra);

                        // Cho tất cả các div .dehienthi khác ẩn đi
                        for (var i = 0; i < nd.length; i++) {
                              nd[i].classList.remove("ra");
                        }

                        // Cho div của đối tượng được click hiển thị ra 
                        phan_tu_hien_ra.classList.toggle("ra");
                  }
            }
      }
}, false);