document.getElementById("Res").addEventListener("click",()=>{


    let opt=document.getElementById("main").value;
    let lab=document.getElementById("dep").value;



    if(lab>=2 && lab<=5){

        if(opt=="cameraman")
        {
          document.getElementById("show").innerHTML="Eligible for Rs 6000"
        }
        else{
            document.getElementById("show").innerHTML="Not Eligible"
        }

    }
    
    else if(lab>=5 && lab<=8){

        if(opt=="Editing")
        {
          document.getElementById("show").innerHTML="Eligible for Rs 8000"
        }
        else{
            document.getElementById("show").innerHTML="Not Eligible"
        }
    }

    else if (lab>=12 && lab>=17){
    
        if(opt=="HR")
        {
            document.getElementById("show").innerHTML="Eligible for Rs 15000"
        }
        else{
            document.getElementById("show").innerHTML="Not Eligible"
        }
    }
    else{
        document.getElementById("show").innerHTML="Not eligible for Anything"
    }
})