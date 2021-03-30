var x1 = document.querySelectorAll('.n1');
console.log(x1);
x1[0].classList.remove('btn-outline-info'); // Xóa class tương ứng, chỉ xóa được 1 class trong 1 hàm
x1[0].classList.remove('btn');

x1[0].classList.add('btn'); // Thêm class
x1[0].classList.add('btn-block');
x1[0].classList.add('btn-warning');

var x3 = document.querySelectorAll('.n3');
x3[0].classList.toggle('btn'); // Tự động xóa class btn do class đó đã tồn tại
x3[0].classList.toggle('btn-block'); // Không có class tương ứng thì tự động thêm vào, nếu có thì tự động xóa đi



