const readline = require("readline")
const userInput = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

userInput.question("",(value1)=>{

    userInput.question("",(value2)=>{
       const a =  Number(value1)
       const b =  Number(value2)
      console.log(`SOMA = ${a+b}`)
    })
})