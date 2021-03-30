var hocvien = {
      ten : "Việt",
      ho : "Nguyễn",
      tuoi:31,
      chieucao:112,
      cannang:45,

      tendaydu:function () {
            return this.ho + " " + this.ten; // Trả về giá trị của họ tên
      },
      danhgia:function(){
            if (this.chieucao/this.cannang < 3) {
                  return "Đẹp trai";
            }
            else{
                  return "Hơi gầy, cần bồi bổ thêm ! ";
            }
      }
}
console.log(hocvien.tendaydu()); // Gọi tên phương thức
console.log("Tuổi học viên là : ");
console.log(hocvien['tuoi']);
console.log("Đánh giá sơ bộ : ");
console.log(hocvien.danhgia());