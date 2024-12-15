// ? Herif Tapmaq Tetbiqi 
let cumle="Hayatin en guzel anlari,sessizce bize ders veren sadeliklerde gizlidir.";
let herf = prompt("Zehmet olmasa, herfi daxil edin:");
function bul(herf){
      let toplam=0;
    for (i=0; i<=cumle.length ; i++){
        if(cumle.charAt(i)==herf){
            toplam+=1;
        }   
      }
  return toplam;
}
let netice=bul(herf);
console.log(netice);

