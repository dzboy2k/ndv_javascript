document.addEventListener("DOMContentLoaded",function(){
      console.log("Load xong");

      var trangthai = "duoi300";
      // Bắt sự kiện khi người dùng scroll
      window.addEventListener("scroll",function(){
            // console.log("Đang cuộn chuột");
            // Trả về vị trí của người dùng
            console.log(window.pageYOffset); // pageYOffset: vị trí của trang theo trục OY

            if(window.pageYOffset > 300){
                  // Lệnh này chỉ chạy 1 lần khi >300, tránh bị xử lý liên tục
                  if(trangthai == "duoi300"){
                        console.log("Đang ở menu, làm gì làm đi");
                        trangthai = "tren300";
                  }
                  
            }
      })
})