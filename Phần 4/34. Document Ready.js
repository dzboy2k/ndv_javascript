document.addEventListener("DOMContentLoaded",function name(params) {
      // Code ở đây
      var x1 = document.getElementById('n1');
      console.log(x1);
      x1.onclick = function () { // Gọi sự kiện click
            console.log('Bạn vừa click vào ' + x1);
            x1.classList.add('dixuong');
      }
},false); 
// addEventListener: thêm vào một sự kiện nghe ngóng, DOMContentLoaded : chờ cho nội dung của trang html được tải xong, thì sẽ thực hiện function, nếu không thì false.