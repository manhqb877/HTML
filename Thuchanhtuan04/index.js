function kiemtraUSER() {
    let regex = /^[a-z0-9_-]{3,16}$/;
    let input = document.getElementById("txt").value;
    let kt = regex.test(input);
    if(kt == true){
        document.getElementById("thongbao").innerHTML = "Nhap dung mau";
    }
    else document.getElementById("thongbao").innerHTML = "Nhap sai mau";
}

function kiemtraPass(){
    let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,32}$/;
    let input = document.getElementById("pass").value;
    let kt = regex.test(input);
    if(kt == true){
        document.getElementById("outpass").innerHTML = "Nhap dung mau";
    }
    else document.getElementById("outpass").innerHTML = "Nhap sai mau";
}
function kiemtraEmail(){
    let regex =/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let input = document.getElementById("email").value;
    let kt = regex.test(input);
    if(kt == true){
        document.getElementById("outemail").innerHTML = "Nhap dung mau";
    }
    else document.getElementById("outemail").innerHTML = "Nhap sai mau";
}
function kiemtraIPV4(){
    let regex =/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let input = document.getElementById("ipv4").value;
    let kt = regex.test(input);
    if(kt == true){
        document.getElementById("outipv4").innerHTML = "Nhap dung mau";
    }
    else document.getElementById("outipv4").innerHTML = "Nhap sai mau";
}
  