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

mukemmelReqem(6);