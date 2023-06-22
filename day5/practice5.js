


let box =document.getElementById("box-el")
box.addEventListener("click",function(){
    console.log("I want to open the box")
})  

let myLead = ["www.awsomelead.com","www.awsomkwjdhelead.com","www.awsomelead.com"]
const inputel = document.getElementById("input-el")

const inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click",function(){
   myLead.push(inputel)
   console.log(myLead)
})


let ulEl = document.getElementById("ul-el")
console.log(ulEl)

for (let i = 0; i<myLead.length; i++){
    
    ulEl.innerHTML  += "<li>" + myLead[i] + "</li> "
    console.log(myLead[i])
}

const container = document.getElementById("container")

container.innerHTML = "<button onclick='buy()'>Buy!</button>"

function buy(){
    container.innerHTML += "<p>Thankyou for buying!</p>"
}

for (let i = 0 ; i<5 ; i++){
    for(let j = 0 ; j<i  ; j++){
        console.log("* ")

    }
    console.log("")
}