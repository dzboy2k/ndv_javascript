// console.log("Chạy chưa các bạn");
var anhs = document.querySelectorAll(".cacAnh img");

// console.log(anhs);
var nenDen = document.querySelector(".nenden");
var dongLai = document.querySelector(".dongLai");
var thongtinanh = document.querySelector(".thongtinanh");
var khoiCacAnhLis = document.querySelectorAll(".khoiCacAnh ul li")
// console.log(khoiCacAnhLis);
// var anhActive = document.querySelector(".khoiCacAnh ul li.active");
// console.log(anhActive); // null
var nphai = document.querySelector(".nphai");
var ntrai = document.querySelector(".ntrai");
var thuTuCuaActive = 0;

// Khi click vào nền đen
nenDen.addEventListener("click",function(){
      // console.log("Đóng lại");
      nenDen.classList.remove("ra"); 
      thongtinanh.classList.remove("ra");
      var anhActive = document.querySelector(".khoiCacAnh ul li.active");
      // console.log(anhActive);
      anhActive.classList.remove("active");
})

for (var i = 0; i < anhs.length; i++) {
      anhs[i].addEventListener("click",function(){
            // console.log("Bạn vừa click vào ảnh");
            // console.log(this);
            
            // console.log(nenDen);
            nenDen.classList.add("ra"); 

            thongtinanh.classList.add("ra");
            var anhDuocClick = this;
            // console.log(anhDuocClick);
            // console.log(anhDuocClick.previousElementSibling);
            for (var chiSo = 0; anhDuocClick = anhDuocClick.previousElementSibling; chiSo++) {}
            // console.log(k);
            
            thuTuCuaActive = chiSo;
            // In ra phần tử được active
            // console.log(khoiCacAnhLis[chiSo]);
            khoiCacAnhLis[chiSo].classList.add("active");
      }); 
}

var hientai2 = thuTuCuaActive;
nphai.addEventListener("click",function () {
      // console.log("I know you did last summer");
      
      console.log("Số lượng ảnh là:"+khoiCacAnhLis.length);

      // Xác định phần tử tiếp theo
      var soLuongAnh = khoiCacAnhLis.length;
      var phanTuHienTai = khoiCacAnhLis[hientai2];
      // if(hientai2 < soLuongAnh - 1){
      //       // Chưa đến cuối
      //       thuTuCuaPhanTuTiepTheo = hientai2 + 1;
      // }
      // else{
      //       thuTuCuaPhanTuTiepTheo=0;
      // }
      // thuTuCuaPhanTuTiepTheo = (1) ? (2) : (3);
      hientai2 = (hientai2 < (soLuongAnh - 1)) ? (hientai2 + 1) : 0;
      // console.log("Chi số của phần tử đang được hiển thị là: "+thuTuCuaActive);
      // console.log("Chi số của phần tử tiếp theo là: "+thuTuCuaPhanTuTiepTheo);
      var phanTuTiepTheo = khoiCacAnhLis[hientai2];

      phanTuHienTai.classList.remove("active");
      phanTuTiepTheo.classList.add("active");
});

ntrai.addEventListener("click",function () {
      // console.log("Số lượng ảnh là:"+khoiCacAnhLis.length);

      // Xác định phần tử tiếp theo
      var soLuongAnh = khoiCacAnhLis.length;
      var phanTuHienTai = khoiCacAnhLis[hientai2];
      // if(hientai2 > 0){
      //       // Chưa đến đầu
      //       thuTuCuaPhanTuTiepTheo = hientai2 - 1;
      // }
      // else{
      //       thuTuCuaPhanTuTiepTheo= soLuongAnh - 1;
      // }
      // thuTuCuaPhanTuTiepTheo = (1) ? (2) : (3);
      hientai2 = (hientai2 > 0) ? (hientai2 - 1) : (soLuongAnh - 1);
      // console.log("Chi số của phần tử đang được hiển thị là: "+thuTuCuaActive);
      // console.log("Chi số của phần tử tiếp theo là: "+thuTuCuaPhanTuTiepTheo);
      var phanTuTiepTheo = khoiCacAnhLis[hientai2];

      phanTuHienTai.classList.remove("active");
      phanTuTiepTheo.classList.add("active");
});