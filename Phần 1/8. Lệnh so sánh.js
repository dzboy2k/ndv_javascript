/* So sánh trong javascript
      - if( điều kiện ){
            - Nếu đúng thì thực hiện
      }

      - if( điều kiện ){
            - Nếu đúng thì thực hiện
      }
      else{
            - Thực hiện nếu sai
      }
*/ 

var diem = 0 ;
if (diem >= 5 && diem < 8) { // &&: và, cùng một lúc cả 2 điều kiện xảy ra
      console.log("Khá");
}
else if(diem>=8 && diem<10){
      console.log("Giỏi");
}
else if(diem == 10){
      console.log("Xuất sắc")
}
else if(diem==0 || diem==1){ // ||: hoặc, 1 trong 2 điều kiện xảy ra
      console.log("Yếu quá")
}