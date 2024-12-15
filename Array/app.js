//Bir array verilib: [2, 4, 6, 8, 10]. Bu array-in içindəki cüt ədədləri tap və onları 3-ə vur. Sonra bu yeni dəyərləri yeni bir array-ə əlavə et və nəticəni console-a çap et.
let array1=[2,4,6,8,10];
let newarray=[];
for(i=0;i<=array1.length;i++){
      if(array1[i]%2===0){
            newarray.push(array1[i]*3);

      }
}
console.log(newarray);

//Bir array verilib: [10, 15, 20, 25, 30]. Array-dəki bütün ədədlərin cəmini tap. Nəticəni console-a çap et.
let array2=[10, 15, 20, 25, 30];
let toplam=0;
for(i=0;i<=array2.length-1;i++){
     toplam+=array2[i];
}
console.log(toplam);