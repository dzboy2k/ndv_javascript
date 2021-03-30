// Truy xuất cái nút

// Trước khi truy xuất phải document ready
document.addEventListener("DOMContentLoaded",function(){
      // Dùng code
      var nut = document.getElementById('nut1');
      var khoi = document.getElementsByClassName("card");
      console.log(nut);
      console.log(khoi);
      console.log(khoi[0]);
      // Gọi sự kiện click
      nut.onclick = function() {
            console.log("Click được chưa");
            khoi[0].classList.toggle('diphai'); // Thêm/Xóa class tương ứng
      }
},false);
