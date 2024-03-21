let num1=(document.getElementById("n1"));
let num2= (document.getElementById("n2"));



// function additionOperation()
// {

// let sum=Number(num1.value) + Number(num2.value);

// document.getElementById("one").innerHTML=sum
// }


// function SubOpertion()
// {
//     let sub=Number(num1.value-num2.value);
//     document.getElementById("one").innerHTML=sub
// }

// //es6
// //syntax
// // ()=>{}


// let multiptionOperation=()=>{
//     document.getElementById('one').innerHTML= Number(num1.value * num2.value);
// }


// let op= (a,b)=> {

//     document.write("Result", a+b);
//     document.write(`Result a+b=${a+b}`);
// }

// op(10,50)



// //es5
// function op1(d,e,f){
//     document.write(`<br> Result d+e/f=${d+e/f}`);

// }

// op1(10,20,30)




document.getElementById("det").addEventListener("click",()=>{
 document.getElementById('one').innerHTML=Number(num1.value/num2.value);

})

document.getElementById("det").addEventListener("click",()=>{
    document.getElementById('one').innerHTML=Number(num1.value % num2.value);
   
   })