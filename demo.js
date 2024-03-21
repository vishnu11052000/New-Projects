// document.write(`Rs 600  ${6700==600}`)

// let a=10,b=10;
// document.write(`<br> ${a==b}`)

//syntax
// if(condition)
// {
// stmt;
// }




// document.getElementById("sub").addEventListener("click",()=>{
//  let use=document.getElementById("age").value 

//  let sel=document.getElementById("main").value

//  if(use>18 ) {
//     document.getElementById("two").innerHTML='Eligible to Voting'

//  }

//  else{
//     document.getElementById("two").innerHTML='Not Eligible to Voting'
//  }
// })


// document.getElementById("sub").addEventListener("click",()=>{
//     let use=document.getElementById("age").value 
   
//     let sel=document.getElementById("main").value
   
//     if(use>2000 ) {
//        document.getElementById("two").innerHTML='Eligible to Voting'
   
//     }
   
//     else{
//        document.getElementById("two").innerHTML='Not Eligible to Voting'
//     }
//    })
   
   
   document.getElementById("off").addEventListener("click",()=>{


      let x=document.getElementById("niv").value;
      let y=document.getElementById("min2").value;

      if(x>5000 && y=="Apple"){
         document.getElementById("div").innerHTML="Rs 200 Discount"
      }
      else if(x>6000 && y=="Realme"){
         document.getElementById("div").innerHTML="Rs 600 Discount"

      }
      else if(x>8000 && y=="Redmi"){
         document.getElementById("div").innerHTML="Rs 800 Discount"
      }
      else if(x>10000 && y=="Moto"){
         document.getElementById("div").innerHTML="Rs 900 Discount"
      }

      else{
         document.getElementById("div").innerHTML="Offer Not Available"
      }

   })   




   // document.getElementById("prs").addEventListener("click",()=>{
    

   //    // let select=document.getElementById("valu").value;
   //    let txt=document.getElementById("tap").value;
   //    let set=document.getElementById("send").value;

   //    if(set=="TamilNadu"  && txt>18){
   //       document.getElementById("shw").innerHTML="Eligible"
   //    }

   //    else if(set=="Kerala"  && txt>20){
   //       document.getElementById("shw").innerHTML="Eligible"
   //    }  

   //    else if(set=="Karnataka"  && txt>24){
   //       document.getElementById("shw").innerHTML="Eligible"
   //    }
   //    else if(set=="NewDelhi"  && txt>30){
   //       document.getElementById("shw").innerHTML="Eligible"
   //    }
   //    else{
   //       document.getElementById("shw").innerHTML="Not Eligible"
   //    }


   // })


   



   








