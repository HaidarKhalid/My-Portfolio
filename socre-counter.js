let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")
let deleteEl = document.getElementById("delete-el")
let resetEl = document.getElementById("reset-el")



function reset() {
    let reset = count = 0
    countEl.textContent = count
}
let countStr = reset
function save() {
    let countStr = " : "+ count 
     saveEl.textContent += countStr
 }
 function increment() {
    count += 1
    countEl.textContent = count
}

//////////////////////////////////
