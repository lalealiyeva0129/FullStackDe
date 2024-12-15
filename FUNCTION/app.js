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