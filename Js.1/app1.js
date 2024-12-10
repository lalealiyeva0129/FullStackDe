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