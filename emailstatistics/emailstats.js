//save the inputs to a variable when submitting the button
//calculate the stats from the variables
//append the results to its place



let emailStats = {};
const form = document.querySelector("form")
const openratePara = document.createElement("p")
const ctrPara = document.createElement("p")
const ctorPara = document.createElement("p")
const resultsDiv = document.querySelector(".results")
const resetButton = document.querySelector("button[type='reset']")

openratePara.classList.add("resultstyle")
    ctrPara.classList.add("resultstyle")
    ctorPara.classList.add("resultstyle")
    
const removeResults = () => {
    openratePara.textContent = "";
    ctrPara.textContent = "";
    ctorPara.textContent = "";
    openratePara.remove();
    ctrPara.remove();
    ctorPara.remove();
}


form.addEventListener("submit", function(event){
    event.preventDefault();
    removeResults()
    emailStats = Array.from(document.querySelectorAll("#emailstats input"))
    .reduce((acc, input) => ({...acc,[input.id]: input.value}),{});   
   
    resultsDiv.append(openratePara, ctrPara, ctorPara)

    openratePara.append(`Openrate: ${(emailStats.read / emailStats.sent * 100).toFixed(2)}%`)
    ctrPara.append(`CTR (click through rate): ${(emailStats.click / emailStats.sent * 100).toFixed(2)}%`)
    ctorPara.append(`CTOR (click to open rate): ${(emailStats.click / emailStats.read * 100).toFixed(2)}%`)
})

form.addEventListener("reset", removeResults)











//THIS WORKS IN THE CONSOLE
// let sent = prompt("Sent number of the email")
// let open = prompt("Opened number of the email")
// let click = prompt("Number of clicks in the email")

// const calculate = ()=>{
//     let openRate = `${(open/sent * 100).toFixed(2)}`
//     let ctr = `${(click/sent * 100).toFixed(2)}`
//     let ctor = `${(click/open * 100).toFixed(2)}`
//     console.log(`Openrate is ${openRate}%`)
//     console.log(`Click through rate (CTR) is ${ctr}%`)
//     console.log(`CTOR (Click to open rate) is ${ctor}%`)
// }

// calculate();
