/* Tạo phím tắt gõ lệnh trong Sublime Text:
      1. Tool -> Developer -> New Snippet
      2. Xóa dòng số 3: Hello, ${1:this} is a ${2:snippet}. -> Dán câu lệnh cần gõ phím tắt vào, gõ $1 vào vị trí cần đặt con trỏ
      3. Dòng số 6: <tabTrigger> Đặt tên phím tắt ở đây</tabTrigger>
      4. Save lại tênFile.sublime-snippet

- Ctrl + Shift + T: Mở lại tab đã đóng trong sublime text
*/ 

document.addEventListener("DOMContentLoaded",function(){
      var nut = document.getElementById('nuthieuung');
      // console.log(nut);
      var trangthai = "lan1";

      var khoi = document.getElementById('kcd');
      nut.onclick = function(){
            // console.log("Bạn vừa click vào nút");
            if(trangthai == "lan1"){
                  console.log("Click lần 1");
                  trangthai = "lan2";

                  // Xử lý code cho việc hiệu ứng lần 1
                  khoi.classList.add("chieuso1");
                  khoi.classList.remove("ko-dong");
            }
            else if(trangthai == "lan2"){
                  console.log("Click lần 2");
                  trangthai = "lan1";
                  // Xử lý code cho lần 2
                  khoi.classList.remove("chieuso1");
            }
      }
},false);