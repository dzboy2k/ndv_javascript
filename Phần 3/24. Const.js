const SO_LUONG_NHAN_SU = 20; // Hằng số không thay đổi được giá trị
const NGAY_GIAO_DICH = 100;
console.log(SO_LUONG_NHAN_SU);

var x = "Việt";
var y = "31 tuổi";

console.log("Xin chào " + x + " ! "
      + "có phải anh " + y + " hay không "
      );

var z = "Béo thế em";
var comment = "<div class='cm-2'> " + z + " </div>";
// console.log(comment);

// Sử dụng chuỗi thay thế(template string)
var comment2 = `<div class='cm-2'> 
                    <i> ${x} </i>
                    <br>
                    <b> ${y} </b>
                    <h2 class='tieude'>
                        ${z}
                    </h2>
                 </div>`;
console.log(comment2);