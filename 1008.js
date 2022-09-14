const readline = require("readline")
const userInput = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

userInput.question("Total employee's?:",(value)=>{
    //total employee's
      const employer = Number(value)

      userInput.question("Total Hours?:",(value)=>{
        //total hours
        const  hours= Number(value)
        userInput.question("Total Salary?:",(value)=>{
            //par hourse salary
           
            const salary  = value
            const floatValue = parseFloat(salary*hours).toPrecision(value.length +1) 


            //output
            console.log(`NUMBER = ${employer}\nSALARY = U$ ${floatValue}`)
        })
  })

})

//https://www.beecrowd.com.br/judge/en/runs/code/29790770

