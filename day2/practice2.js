let UserName = "fav"
let message = "How are you"
console.log("you have three new messages",message)

let messageToUser = UserName + ", "+ message + "!"
console.log(messageToUser)

let names = "favaz "
let greeting = "Hi, My Name is JOJU "
let myGreeting = names + greeting 
console.log(myGreeting)



let naam = "Favaz "
let greet = "We Invite to You Family , ..."
let welcomeEl = document.getElementById("welcome-el").innerText = naam + greet


let firstName = "Muhammed"
let lastName  = "favaz"

let fullName = firstName + lastName
console.log(fullName)

function showCons(){
    let Name = "Lina"
    let greeting  = "Hi there"
    console.log( greeting +", "+ Name +"!")
}
showCons()

let dis = document.getElementById("error")

function purchaseError(){
    dis.textContent="Something went wrong , please try again later"

}

let numA = document.getElementById("num1").textContent = 10
let numB = document.getElementById("num2").textContent = 20
let sum = document.getElementById("summ")

function adding(){
    let result = numA + numB
    sum.textContent = "sum : " + result
   
    
}
function lessing(){
    let result = numA - numB
    sum.textContent = "sum : " + result
   
    
}
function dividing(){
    let result = numA / numB
    sum.textContent = "sum : " + result
   
    
}
function multipling(){
    let result = numA * numB
    sum.textContent = "sum : " + result
   
    
}