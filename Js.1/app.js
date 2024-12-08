/*   BETTER COMMENTS
      ? bilgilendirme yorumu
      ! Burasi cox onemli
      TODO: burani bele yapilmali
      * comments
 
      *Deyisenin tipini mueyyen etmek ucun typeof istifade edilir */
      
let boy=Number(prompt("Zehmet olmasa, boyunuzu daxil edin:"));
let kilo=Number(prompt("Zehmet olmasa, kilonuzu daxil edin:"));
let hesab= kilo/(boy*2);
if (hesab<18.5){
      console.log("Ideal kilonun altinda");
}else if(hesab>18.9 && hesab<24.9){
      console.log("Ideal kilo");
}else if(hesab>25 && hesab<30){
      console.log("Ideal kilonun ustunde(obez)");
}else{
      console.log("Dietaya basla sen!!!")
}

