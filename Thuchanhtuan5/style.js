function KiemTraTenDN(){
    let re = /^[a-z]\w*/;
    if(re.test(document.getElementById('txtDN').value.trim())== false){
        tendn.innerText = "* bắt buộc, bắt đầu bằng kí tự";
        return false;
    }
    else{
        tendn.innerText = "*";
        return true;
    }
}

function KiemTraPassWord(){
    let re = /(?=.*\d).{6,64})/;
    if(re.test(document.getElementById('txtMK').value.trim())== false){
        tendn.innerText = "* phải có chữ, số, ít nhất 6 kí tự";
        return false;
    }
    else{
        mk.innerText = "*";
        return true;
    }
}

function KiemTraXacNhanPassWord(){
    if(document.getElementById('txtXNMK').value != document.getElementById('txtMK').value){
        xnmk.innerText = "* phải giống ô mật khẩu";
        return false;
    }
    else{
        xnmk.innerText = "*";
        return true;
    }
}

function KiemTraNgaySinh(){
    let ns = Date(document.getElementById('txtNS').value);
    let today = new Date();
    if(eval(today.getFullYear() - ns.getFullYear()) <= 10){
        ngaysinh.innerText = "* tuổi phải lớn hơn 10";
        return false;
    }
    else{
        ngaysinh.innerText = "*";
        return true;
    }
}

function SubmitForm(){
    if(KiemTraTenDN() == false || KiemTraPassWord() == false || KiemTraXacNhanPassWord()== false){
        alert('Bạn chưa nhập đầy đủ thông tin :');
        return false;
    }
    return true;
}