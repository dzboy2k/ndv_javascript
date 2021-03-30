var x = document.getElementsByClassName("card-text"); // Tìm tất cả các thẻ có class tương ứng
console.log(x);
console.log(x.length); // In ra số phần tử có trong mảng x

x[0].innerHTML = "Text này được viết trong file JS"; // Thay đổi nội dung phần tử thứ 0 trong mảng x có class tương ứng

// Thay đổi toàn bộ nội dung các phần tử trong mảng x có class tương ứng
for (var i = 0; i < x.length; i++) {
      x[i].innerHTML = "Text này được viết trong file JS";
}

var y = document.getElementsByClassName('card-title');
for (var i = 0; i < y.length; i++) {
      y[i].innerHTML = "Tadaaaa !";
}