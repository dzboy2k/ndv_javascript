function vd1() { // Hàm không có tham số
      var ten = "Việt";
      console.log("Đi chơi không " + ten);
}
vd1(); //vd1("huong"); 

var ten = "zing";
function vd2(ten){ // Hàm có tham số
      console.log("Tối đi học không " + ten);
}
vd2("Hương");
vd2(ten);

function tinhtbc(ten,x,y,z,k,h,l) {
      console.log("Chào " + ten);
      console.log("Trung bình cộng của 6 số là " + (x+y+z+k+h+l)/6);
}
tinhtbc("Việt",5,6,7,8,9,5);