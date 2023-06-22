let myAge = 35
let humanDogRatio = 7
let multiple = myAge * humanDogRatio
console.log(multiple)

let bonuspoints = 50

bonuspoints = bonuspoints + 50
console.log(bonuspoints)
bonuspoints = bonuspoints - 75
console.log(bonuspoints)
bonuspoints = bonuspoints + 45
console.log(bonuspoints)


function mycall(){
    console.log(45)
}
mycall()

function sumoflaps(){
    let lap1 = 34
    let lap2 = 33
    let lap3 = 36

    sum = lap1 + lap2 + lap3
    console.log(sum)
}
sumoflaps()


let lapsComplete = 0

function incrementLap(){
    lapsComplete = lapsComplete + 1

}
incrementLap()
incrementLap()
incrementLap()
incrementLap()
console.log(lapsComplete)




let num = 0
function count(){
    num = num + 1
    counting.innerText = num
    
}
function countLess(){
    num = num -1
    counting.innerText = num
}
let saveStore = document.getElementById("saveBtn")
function saveBtn(){

    let countstr =" "+ num + "  - "
    saveEl.innerText += countstr

}
function clearBtn(){
    document.getElementById("counting").innerText = 0
    num = 0
}

let saveEl =document.getElementById("pervioussave")
saveEl.innerText = "previous entries :" 




