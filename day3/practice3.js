
let Cards = []
let sum = 0
console.log(sum)
let isAive = true
let hasBlackJack = false
let message = ""

console.log(Cards)


let player = {
    name : "favaz",
    Chips : 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + " : $" + player.Chips

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard(){
    let randomCard = Math.floor(Math.random()*13) + 1
    if(randomCard == 1 ){
        return 11
    }else if(randomCard > 10 ){
        return 10
    }else{
        return randomCard
    }
}
    console.log(getRandomCard())

function startGame(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard() 
    Cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame(){
    if (sum <= 20){
        message = "Do You want to Draw a new card ..?"
    }else if(sum == 21){
    message="whooh..! You have got blackjck!"
        hasBlackJack = true
    }else{
        message = "You are Out of the game ...!"
        isAive = false
    }
    console.log(isAive)
    console.log(message)
    messageEl.textContent = message
    sumEl.textContent = "sum: " + sum
    cardsEl.textContent = "Cards: " 
    for (let i = 0; i < Cards.length; i++){
        cardsEl.textContent += Cards[i] +" "
    }

}
function newCard(){
    if ( isAive ===true && hasBlackJack === false ){ 

        console.log("seccessfully completed")
        let card = getRandomCard()
        sum += card    
        Cards.push(card)
        console.log(Cards)
        renderGame()
    }
}


if (sum < 21){
    console.log("draw new one ...")
}else if (sum == 21){
    console.log("Good ...")
}else{
    console.log("Oops ....")
}

let Age = 21
if (Age > 21){
    console.log("Welcome")
}else{
    console.log("You can not enter the club")
}

let age = 1
if (age< 100){
    console.log("Not Eligible...")
}else if(age == 100){
    console.log("Here is your Birthday Card from the king ...")
}else{
    console.log("not eligible , you have already gotten one ...")
}



let featuredPosts = [
    "Check out my Netflix clone",
    "Here's the code for my project",
    "I've just relaunched my Portfolio"
]

let experience = [
    "Coding",
    "Hotel Managig",
    "Communication Skill '60%'"
]

console.log(experience)
console.log(experience[0])
console.log(experience[1])
console.log(experience[2])
console.log(experience.length)

let mySelf = [
    "Muhammed Favaz",
    "22",
    false   
]
console.log(mySelf)

let massage = [
    "Hey how's it going?",
    "iam great, thang you! How about you?",
   "All good. Been working on my portfolio lately.",
   "hyy"

]

let newMassage = "same hear!"

massage.push(newMassage)
console.log(massage)

massage.pop()
console.log(massage)
for (let i = 0 ; i < 5 ; i += 1 ){
    console.log(massage[i])
}

let cardss = [7,5,2]
for (let i = 0; i < cardss.length; i+=1 ){
    console.log(cardss[i])
}

