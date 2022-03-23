let chars = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let passLen = 16


function ranNum() {
    randomPass = ""
    for ( let i=0; i<passLen; i++){
        let randomLetter = Math.floor(Math.random() * chars.length) + 1
        randomPass += chars.charAt(randomLetter)  
    }
    return randomPass
}

function genPass() {
    document.getElementById("div1").textContent = ranNum()
    document.getElementById("div2").textContent = ranNum()
    document.getElementById("div3").textContent = ranNum()
    document.getElementById("div4").textContent = ranNum()
    document.getElementById("display-pass").style.display = "block"
}