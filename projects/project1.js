function solution(number){

    let multipleOfThrees=[]
    let multipleOffives=[]

    for(let i= 1; i<number; i++){
        if (i % 3== 0){
            multipleOfThrees.push(i)
            console.log("hhj")
        }
        if (i % 5 == 0){
             multipleOffives.push(i)
        }
    }

   console.log(multipleOfThrees)
   console.log(multipleOffives)

   let sumOfThrees = multipleOfThrees.reduce((number,acc)=> number + acc)
   console.log(sumOfThrees)

   let sumOfFives = multipleOffives.reduce((number,acc)=> number + acc)
   console.log(sumOfFives)

   return sumOfThrees + sumOfFives

}
let result = solution(10)
console.log(result)                                                                                             