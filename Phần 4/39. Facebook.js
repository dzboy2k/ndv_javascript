document.addEventListener("DOMContentLoaded",function(){
      // Khai báo biến cần sử dụng trong cái APP này
      var tamgiac = document.getElementsByClassName('tamgiac');
      var tamgiac = tamgiac[0];
      // console.log(tamgiac[0]);
      var danhsach = document.getElementsByClassName("danhsach");
      var danhsach = danhsach[0];

      //  Sử dụng hàm onclick và toggle class cho tam giác đổi màu 
      tamgiac.onclick = function () {
            console.log("Bạn cừa click!");
            // this.style.color = "white"; // this = tamgiac, style là thuộc tính tấc dụng vào CSS - Cách 1

            this.classList.toggle("tamgiactrang"); // Cách 2
            danhsach.classList.toggle("ra");
      }
},false);
