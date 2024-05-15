function formkontrol(){

    adi= document.getElementById('ad').value;
    sifre= document.getElementById('sifre').value;


    var hata= new Array();
    


    if(adi=="") 
        hata.push('Lütfen adı boş geçmeyiniz');
    else if (adi.length<2)
        hata.push('Lütfen adı alanını 2 karakterden büyük giriniz');
    

    if (sifre=='')
        hata.push('Şifre alanını boş geçmeyiniz');
    else{
        if (sifre.length<2)
            hata.push('Şifre 2 karekter veya daha büyük olmalıdır.');
        else if (sifre.search(/[0-9]/) < 0)
            hata.push("Şifre en az bir rakam içermelidir.");
        
    }

    if(adi!="ead"){
    hata.push('adınız ya da şifreniz yanlış');
    }
    if(sifre!='ead1'){
        hata.push('adınız ya da şifreniz yanlış');
    }
    if (hata.length > 0) {
            alert(hata.join("\n"));
            return false;
    }
   else alert('Giriş Yapıldı');
    

}