// ! FUNCTION or METHOD
function toplam(a,b){
      console.log(a+b);
 }
 toplam(3,7);

// ? Iki ededden boyuyunu cap etdir.
 function muqayise(a , b){
    if(a>b){
      console.log("Boyuk:"+a);
    }else{
      console.log("Boyuk:"+b);
    }
 }
 muqayise(8,7);

// ? Ededin cut ve ya tek oldugunu tapin.
 function tekCut (a) {
      if(a%2==0){
            return "Bu eded cutdur!";
      }else{
            return "Bu eded  tekdir!";
      }
 }
 let netice=tekCut(8);
console.log(netice);

// ? Verilən ədədin kvadratını hesablamaq və sonra nəticəyə başqa bir parametrə görə dəyişiklik etməkdir.
function kvadratVeDeyis(a,b){
      let kvadrat=a*a;
  if(b>0){
      return kvadrat;
  }else{
      return -kvadrat;
  }
}
let netice1=kvadratVeDeyis(5,2);
console.log(netice1);

// ? Verilmis bir nece ededin icerisinden en boyuyu secmek.
function ededler(a,b,c,d){
      return Math.max(a,b,c,d);
}
let a=ededler(2,6,4,9);
console.log(a);

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
let neticee=bul(herf);
console.log(neticee);

// ? Mukemmel Reqem Tetbiqi

function mukemmelReqem(a){
  let toplam1=0;
  for(i=2;i<=a/2;i++){
    if(a%i==0){
      toplam1+=i;
    }
  }
   toplam1+=1+a;

  if(toplam1==a*2){
    console.log("Mukemmel Reqemdir.!");
  }else{
    console.log("Mukemmel Reqem deyil.!");
  }

}

mukemmelReqem(7);