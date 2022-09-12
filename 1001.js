const readline = require("readline")
const userInput = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

userInput.question("",(a)=>{
    userInput.question("",(b)=>{
     const x = Number(a)+Number(b)
     console.log(`X = ${x}`)
    })
})

