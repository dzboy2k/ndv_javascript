var cactieude = document.getElementsByTagName('h5'); // Tìm các thẻ h5 có trong file html
console.log(cactieude); // In ra mảng các thẻ h5
console.log(cactieude[1]); // In ra phần tử thứ 1 trong mảng chứa thẻ h5

cactieude[1].innerHTML = "<button class='btn btn-info btn-block'> Việt Đẹp Trai </button>"; // Thay đổi phần tử thứ 1 chứa thẻ h5 và nội dung của thẻ h5

// Thay đổi tất cả phần tử và nội dung của thẻ trong mảng chứa thẻ h5
for (var i = 0; i < cactieude.length; i++) {
      cactieude[i].innerHTML = "<button class='btn btn-info btn-block'> Việt Đẹp Trai </button>";
}