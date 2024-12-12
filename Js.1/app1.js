/* 
! Swich_case  if_else ile eyni funksiani dasiyir.AMMA if daha cox istifade edilir.
*/ 

let reqem=prompt("Zehmet olmasa, 1 ile 5 arasinda bir reqem daxil edin:");
switch(reqem){
      case "1":
            console.log("Daxil etdiyiniz reqem"+ reqem + "-dir");
      break;
      case "2":
            console.log("Daxil etdiyiniz reqem"+ reqem + "dir");
      break;
      case "3":
            console.log("Daxil etdiyiniz reqem"+ reqem + "dir");
      break;
      case "4":
            console.log("Daxil etdiyiniz reqem"+ reqem +"dir");
      break;
      case "5":
            console.log("Daxil etdiyiniz reqem"+ reqem +"dir");
      default:
            console.log("Daxil etdiyiniz reqem 1 ile 5 arasinda deyil.");
} 
            


/*
  ? 1__10 qeder yazdir.Ve onlarin cemini de tap
 */
 let sum=0;
for(i=0;i<=10;i++){
      sum=sum+i;
   console.log(i);
}
console.log(sum); 

/*
 ? 1-dən 100-ə qədər olan cüt rəqəmləri ekranda göstərən bir JavaScript proqramı yaz.
*/ 
for(i=0;i<=100;i=i+2){
      document.write(i+"<br>");
}


/* 1-dən 100-ə qədər olan ədədləri yoxlayın:

Əgər ədədin kvadratı 500-dən kiçikdirsə, "Kiçik" yazın.
Əgər kvadrat 500-dən böyükdürsə, "Böyük" yazın.*/

for(i=0;i<100;i++){
      if(Math.pow(i, 2) < 500){
           document.write(i+"="+"Kicik"+"<br>");
      }else{
           document.write(i+"="+"Boyuk"+"<br>");
      }
}

// ? Vurma cedveli 

for(i=1;i<=10;i++){
      for(j=1;j<=10;j++){
            console.log(i +"*"+j+"="+i*j);
      }
      console.log( "..........");
}
      
// ? Verilmiş n ədədinə qədər olan bütün ədədləri toplayan bir kod yaz.
let n=prompt("Ededi daxil edin:");
let sum1=0;
for(i=1;i<=n;i++){
      sum1+=i;

}
      
console.log("Cem:"+sum1);
// ? Verilmiş bir ədədə qədər olan tək ədədlərin cəmini hesabla.
let n1=6;
let sum2=0;
for(let i=1;i<=n1;i++){
      if(i % 2 !==0){
            sum2+=i;   
      }
}
console.log(sum2);
// ? Verilmiş n ədədinə qədər olan ədədlərin kvadratlarının cəmini hesabla.
let n2=prompt("Reqemi daxil edin:");
let sum3=0;
for(i=1;i<=n2;i++){
      sum3+=Math.pow(i,2);
}
console.log(sum3);

// ? Verilmiş n ədədinə qədər olan ədədlərdən yalnız 3-ə bölünən ədədləri tap və cəmini hesabla.
let n3=prompt("Ededi daxil edin:");
let sum4=0;
for(i=0;i<=n3;i++){
      if(i%3==0){
            sum4=+i;
      }
}
console.log(sum4);
// ? Verilmiş n ədədinə qədər olan bütün tam kvadrat ədədləri tap.
let n5=prompt("Eded daxil edin:");
let sum5=0;
for(i=0;i*i<=n5;i++){
      sum5=i*i;
      console.log(sum5);
}
