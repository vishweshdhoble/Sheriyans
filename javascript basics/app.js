var a=12;
var b=22;
let c=a+b;

// var x = prompt("Hello");
console.log("hey",c);

var a=[1,2,3,4,5];
var b=[...a];
b.pop();
console.log(b);
console.log(a);

////Constructor and prototypal inheritance

// function makeHumanTest(){
//     this.name = "Vishwesh";
//     this.age = 22;
// }

// function makeHuman(name,age){
//     this.name = name;
//     this.age = age;
// }

// makeHuman.prototype.printMyName = function(){
//     console.log(this.name);
// }

// const human1 = new makeHuman("Vishu",22);
// const human2 = new makeHuman("Vedu",22);

//// Closures

// function counter(){
//     var count = 0;
//     return function(){
//         count++;
//         console.log(count);
//     }
// }

// var fnc = counter();
// fnc();
// fnc();

// function timer(){
//     var a=12;
//     return setTimeout(function(){
//         console.log(a)
//     },2000)
// }

// var ans = timer();

//// JS event delegation

// var parent = document.querySelector("#parent");
// parent.addEventListener("click", function(event){
//     if(event.target.id === "play"){
//         console.log("play song");
//     }
//     else if(event.target.id === "pause"){
//         console.log("pause song");
//     }
// });

////Higher order functions

// function abcd(param)
// {

// }

// abcd(function(){});

////or


// function abcd2(){
//     return function(){

//     }
// }

// var arr=[1,2,3,4,5];
// arr.forEach(function(){});

////Js try catch - for error handling

// function divide(a,b){
//     try{
//         if(b === 0)
//         {
//             throw Error("Cannot divide by 0");
//         }
//         console.log(a/b);
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// divide(12,13);
// divide(12,0);

//Js Custom Events

// const evt = new Event("chacha");

// document.querySelector("button")
// .addEventListener("chacha",function(){
//     alert("chahcha event hua");
// });

// document.querySelector("button").dispatchEvent(evt);

////Axios

// axios.get(`https://randomuser.me/api/`)
// .then(result => console.log(result.data.results[0].dob));

////Promises

// const parchi = new Promise(function(resolve,reject){
//     axios.get(`https://randomuser.me/api/`)
//     .then(result => {
//         if(result.data.results[0].gender === "male") resolve();
//         else reject();
//     });
// });

// parchi
// .then(function(){
//     console.log("hara button daba");
// })
// .catch(function(){
//     console.log("Lal button daba");
// })

////Callback

// function abcde(a,b){
//     b();
// }

// abcde(1,function(){console.log("callback chala")});

// function doSomething(url,callback)
// {
//     fetch(url)
//     .then(raw => raw.json())
//     .then(res => {
//         callback()
//     })
// }


//// Async and Await

// async function testasync(){
//     var a = await fetch(`https://randomuser.me/api/`);
//     a = await a.json();
//     console.log(a);
// }

// testasync();

////Generators - star lagane se generator baan jata hai

//yield ka matlab isko execute karne ke baad ruk jao

function* PrintNumbers(){

    console.log("First");
    yield 1;
    console.log("Second");
    yield 2;
    console.log("Third");
    yield 3;
}

const gen = PrintNumbers();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

////Web Workers

//aap apni main js file se data send karsakte ho and jo perform karna
// hai karoge and vaha se data waapas main file bhejoge and main file
// mein waapaas accept karoge

var nums = Array.from({length:10000},(_,b)=>b+1);

const worker = new Worker("worker.js");
worker.postMessage(nums);
worker.onmessage = function(data){
    console.log(data.data);
}