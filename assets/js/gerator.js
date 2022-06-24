criadorRandom(6);

function criadorRandom(voucher_length){
    
    var random_string_1 = '';
    var random_string_2 = ''; 
    var random_string_3 = '';
    var caracteres_1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var caracteres_2 = '1234567890';
    var caracteres_3 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz';
    for(var i, i = 0; i < voucher_length; i++){    

    random_string_1 += caracteres_1.charAt(Math.floor(Math.random() * caracteres_1.length))
    random_string_2 += caracteres_2.charAt(Math.floor(Math.random() * caracteres_2.length))
    random_string_3 += caracteres_3.charAt(Math.floor(Math.random() * caracteres_3.length))
    
    document.getElementById('voucher').innerHTML = "W" + random_string_2[1] + random_string_1[0] + random_string_2[0] + random_string_3 ;
    }                   
   
    
    
}
function myFunction() {
    var copyText = document.getElementById("voucher");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    
  }