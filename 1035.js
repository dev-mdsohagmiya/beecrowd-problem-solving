// Read 4 integer values A, B, C and D. Then if B is greater than 
// C and D is greater than A and if the sum of C and D is greater
//  than the sum of A and B and if C and D were positives values and 
//  if A is even, write the message “Valores aceitos” (Accepted values).
//   Otherwise, write the message “Valores nao aceitos”
//    (Values not accepted).
//https://www.beecrowd.com.br/judge/en/runs/code/29776797

const readline  =require("readline")

const userInput = readline.createInterface({input:process.stdin,output:process.stdout})

//
userInput.question("Input 3 integer values separete by space: ",(value)=>{
 const a = Number(value[0])
 const b = Number(value[1])
 const c = Number(value[2])
 const d = Number(value[3])
 //
 if(b>c && d>a && (c+d)>a+b && c>0 &&  d>0 ){
  console.log("Valores aceitos")
 }
 else{
    console.log("Valores nao aceitos")
 }
})




