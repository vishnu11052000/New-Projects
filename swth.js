document.getElementById("main").addEventListener("click",(e)=>{

      
// console.log(e.target.getAttribute("id"))

switch(e.target.getAttribute("id"))
{
  
  case "crc":
  document.getElementById("Res").innerHTML="You are Selected Credit";
  break;

    case "dec":
    document.getElementById("Res").innerHTML="You are Selected Debit";
    break;

    case "up":
    document.getElementById("Res").innerHTML="You are Selected UPI";
    break;

    case "cd":
    document.getElementById("Res").innerHTML="You are Selected COD";
    break;


    case "Gpay":
    document.getElementById("Res").innerHTML="You are Selected Gpay";
    break;

    default:
        document.getElementById("Res").innerHTML="You have not Any other option to choose";
    
}
})


// switch(Boolean or expression){)

//     case case1:

//         stmt
//         break;
 
//     case case2:
         
//         stmt
//         break;
    
    
//     default
         
//         stmt
//         break;
//  }


document.getElementById("prs").addEventListener("click",()=>{

  let y=document.getElementById("ic").value;
  
  
  if(y>=4 && y<=6)
  {
    document.getElementById("set").innerHTML="You have 6000 increment"

  }
  else if(y>=7 && y<=9)
  {
    document.getElementById("set").innerHTML="You have 8000 increment"

  }

  else if(y>=10)
  {
    document.getElementById("set").innerHTML="You have 10000 increment"
  
  }

  else{
    document.getElementById("set").innerHTML="You have No increment"
  }

})


