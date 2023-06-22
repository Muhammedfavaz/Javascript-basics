let sentence = ["Hello", "my","name","is","Favaz"]
let greetingEl = document.getElementById("greeting-el")
console.log(greetingEl)
for (let i = 0; i < sentence.length; i+=1){
    greetingEl. textContent += sentence[i] + " "

}

let player1Time = 102
let player2Time = 101

function getFastestRaceTime() {
    if(player1Time < player2Time){
        return player1Time
    }else if(player2Time < player1Time){
        return player2Time
    }else{
        return player1Time
    }
}

let fastestRace = getFastestRaceTime()
console.log(fastestRace)

function getTotalRaceTime(){
    return player1Time + player2Time
}

let totalRaceTime = getTotalRaceTime()
console.log(totalRaceTime)

// let randomNumber = 
// console.log(randomNumber)


function roleDice(){
    let floorNumber = Math.floor(Math.random() * 6) + 1
    return floorNumber

}
console.log(roleDice())

let hasSolvedChallenge = false
let hasHintLeft = false
if (hasSolvedChallenge ==true || hasHintLeft == false){
    showSolution()
}

function showSolution(){
    console.log("showing the solution.....")
}


let likeDocumentaries = true
let likeStartups = true
if (likeDocumentaries ==true || likeStartups ==tr){
    recommentMovie()
}
function recommentMovie(){
    console.log("Hey, Check out this new film we think you will like...!")
}

let plans = {
    name : "favaz",
    age: 22,
    skill : ["HTML","CSS"],
    ReadyToWork : true
}
console.log(plans.ReadyToWork, plans.skill)

let person = {
    name : "Favaz",
    age : 25,
    coundry : "INDIA"
}
function logData(){
    console.log(person.name,"is "+ person.age,"years old and lives in "+ person.coundry)

}
console.log(logData())

let age = 505
if (age >=1 && age < 6){
    console.log("free Pass..")
}else if (age >= 6 && age <= 17){
    console.log("Child discound allowed..")
}else if (age >= 18 && age <= 26){
    console.log("students discount allowed..")
}else if (age >= 27 && age < 66){
    console.log("Give full Price for Pass..")
}else if (age >= 66 && age <= 110){
    console.log("senior citizen discount allowed...")
}else{
    console.log("please mention your jenuine age ...!")
}

let largecountries = ["China","India","USA","Indonesia","Pakisthan"]
for (let i = 0; i < largecountries.length; i++){
    console.log(" - " + largecountries[i])
}
let largecountries1 = ["Tuvalu","India","USA","Indonesia","Monaco"]
largecountries1.shift()
largecountries1.pop()
largecountries1.unshift("China")
largecountries1.push("Palisthan")
console.log(largecountries1)

let dayOfMonth = 13
let weekday = "Friday"

if(dayOfMonth == 13 && weekday == "Friday"){
    console.log("spooky face:😱")
}
let hands = ["rock","papper","scissor"]
function rockPapperGame(){
    let randomGame = Math.floor(Math.random()*hands.length)
    return hands[randomGame]
}
console.log(rockPapperGame())

let fruit = ["🍎","🍊","🍎","🍎","🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

for (let i = 0; i < fruit.length; i++){
    if(fruit[i] == "🍎"){
        appleShelf.textContent += fruit[i]
    }else if(fruit[i] == "🍊"){
        orangeShelf.textContent += fruit[i]
    }
}