var a = document.querySelectorAll('.card .blockquote'); // Chọn tất cả các the có CSS tương ứng
console.log(a); // In ra mảng chứa các phần tử được tìm thấy bằng CSS

console.log(a[1]); // In ra phần tử thứ 1

// Truy xuất đến các phần tử 
for (var i = 0; i < a.length; i++) {
      console.log(a[i]);
      if(i==2){ // Thay đổi nội dung phần tử được chọn
            console.log("Đây là phần tử thứ 3");
            a[i].innerHTML="Phần tử được chọn";
            console.log(a[i]);
      }
}

var b = document.querySelectorAll('#nd');
console.log(b); // In ra mảng chứa id có 1 phần tử
console.log(b[0]);

var c = document.querySelectorAll("[data-thongbao]"); // Tìm thẻ theo data-thuộc tính trong HTML5
console.log(c);
console.log(c[0]);

a = document.querySelectorAll('.card-columns .card:first-child .card-body');
console.log(a); // first-child: Chọn thẻ đầu tiên được tìm thấy có class tương ứng

