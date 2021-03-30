/*
      - Cách xử lý class:
            + document.getElementsByClassName('myClass')
            + Trong Jquery: $('myClass')
      
      - XỬ lý về ID:
            + document.getElementByID('myID')
            + Trong Jquery: $('myID')

      - Xử lý về thẻ html:
            + document.getElementsByTagName('div')
            + Trong Jquery: $('div')
*/ 

var x1 = document.getElementsByTagName("h1"); // Lấy ra tất cả các thẻ h1 có trong file html
console.log(x1); // In ra mảng các thẻ h1

var x2 = document.getElementsByTagName("h2");
console.log(x2);
console.log(x2[0]); // In ra phần tử thứ 0 trong mảng x2

var p1 = document.getElementsByTagName('p');
console.log(p1);
console.log(p1[1]);
console.log(p1[1].innerHTML); // In ra giá trị bên trong của thẻ
p1[1].innerHTML = "Web đã bị hack"; // Thay đổi giá trị của thẻ html