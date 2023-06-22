
const s = 'Hello World melumone';
console.log(s.split(' '));

const numbers = new Array(1,2,3,4,5);
console.log(numbers);
const fruits = ['apple','Banana', 'Orange'];
console.log(fruits[0]);
fruits[3] = 'Papazha';
fruits.push('subarzil');
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.unshift("koko");
console.log(fruits);

const person ={
    firstName : 'Muhammed',
    lastName : 'favaz',
    age : '22',
    hobbies : ['movies','reading','playing'],
    address : {
        street : 'mes ponnani',
        city : 'ponnani',
        state : 'Kerala'
    }
};

console.log(person);
console.log(person.age);
console.log(person.hobbies[1]);
console.log(person.address.city);

/*advaced */

const {firstName,age,hobbies,lastName,email,address:{street,city,state} } = person 

console.log(state);
console.log(hobbies);
person.email = 'muhammedfavaz369@gmail.com';
console.log(person);
console.log(email);

const todos = [
    {
        text : 'apple',
        kg : '2kg'
    },
    {
        text : 'banana',
        kg : '5kg'
    }
]

console.log(todos[1].mangoRate)


for(let i=0; i<todos.length; i++){
    console.log(todos[i].kg)
    console.log(todos[i])
}

for (let hey of todos){
    console.log(hey.kg)
}

/* Array functions . 
high order functions, call back functions

1. foreach 
2. map
3.filter */

todos.forEach(function(tod){
    console.log(tod.kg)
})

// 2.map

const toftext = todos.map(function(todo){
    return todo.kg  
})
console.log(toftext)

// 3. filter

const todoo =  todos.filter(function(tog){
    return tog.kg === true
})

console.log(todoo)


function addNums(num1,num2){
    return num1 + num2 ;   
}

console.log(addNums(55,4));


// Arrow funstion ........

// use return keyWord .."tha pair to {} , return keyWord"
const addNumb =(numb1, numb2) => {
    return numb1 + numb2 ;
}
console.log(addNumb(22,99));

// withOut return keyWord
const Numb =(numb1, numb2) => 
    numb1 + numb2 ;

console.log(Numb(22,1));

// single line Arrow function.....
const lessNums = (n1 , n2) => n1 - n2;
console.log(lessNums(10,2))

// Oop ......     object oriented program......
const a =10 , b = 200
document.write(a+b)
console.log(a+b);

 