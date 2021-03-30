var nut = document.querySelector(".n1");
var khoi = document.querySelector(".khoi");

// Check xem khi nào animation kết thúc
khoi.addEventListener("webkitAnimationEnd",function () {
      console.log("Kết thúc chuyển động, làm gì thì làm");
      this.classList.add("dixuong");
})

nut.addEventListener("click",function () {
      khoi.classList.add("chuyendong");
})
