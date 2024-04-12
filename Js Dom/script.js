/////////////////

const { ResultType } = require("@remix-run/router/dist/utils");

//select and save

// var btn = document.querySelector('#abcd');
// var classabcd = document.querySelector('.abcd');
// var h3 = document.querySelector('h3');

// var imgid = document.querySelector('#imgid');
// var imgclass = document.querySelector('.imgclass');
// var h3class = document.querySelector('.h3class');
// var h3id = document.querySelector('#h3id');

/////////////////

//agar apke pass bohot saare h3 hai toh sirf pehla h3 select hoga
//querySelector se aur saare h3 selector ko select karna hai toh
// querySelectorAll use karna padenga

//var allh3 = document.querySelectorAll('h3');


//////////////////

// kisi ko bhi select karne se pehle pahla step hota hai usko select karna

// var btn = document.querySelector('#buttonselect');

// btn.textContent = "Starting...";

// var h1 = document.querySelector('h1');

// h1.innerHTML += '<i> harsh</i>';

//// js me camel case hoti hai

// var h1 = document.querySelector('h1');
// h1.style.color = 'red';
// h1.style.fontFamily = 'gilroy';
// h1.style.fontSize = '16px';

// h1.classList.add('makeitred');

// var h1 = document.createElement('h1');
// h1.textContent="hey";

// document.querySelector('body').appendChild(h1);
// h1.style.color= 'red';
// h1.style.fontFamily = 'gilroy';
// h1.style.fontSize = '16px';

// var img = document.createElement("img");
// img.src = 'https://cdn.dribbble.com/uploads/47177/original/3986915be548424a5d36657f2b034ead.jpeg?1685645250&format=webp&resize=320x399&vertical=center'

// document.querySelector('body').appendChild(img);
// img.style.borderRadius='20px';

// var btn = document.querySelector("button");

// btn.remove();

// document.querySelector('body').removeChild(img);

/////////////////


//// Event handling

// var btn = document.querySelector("button");
// btn.addEventListener('mouseover', function(){
//     btn.textContent = "starting...";
//     btn.style.backgroundColor = 'black'
//     btn.style.color = 'white';
// });

// var btn = document.querySelector("button");
// btn.addEventListener('mouseleave', function(){
//     btn.textContent = "Download";
//     btn.style.backgroundColor = 'white'
//     btn.style.color = 'black';
// });

//// Event Object

// var b = document.querySelector("body");
// b.addEventListener("mousemove",function(dets){
//     console.log(dets.clientX,dets.clientY);
// });

/////////////////////////////////////////////////////////////////////////////////////////

/////////////    Task - 1

// var p = document.querySelector("p");

// var btn = document.querySelector("button");

// btn.addEventListener('click',function(){
//     p.textContent = "say hello";
// });

/////////////    Task - 2

// var btn =  document.querySelector("button");
// var img1 = document.querySelector("#img1");
// var img2 = document.querySelector("#img2");

// btn.addEventListener('click',function(){
//     var src1 = img1.src;
//     var src2 = img2.src;

//     img1.src = src2;
//     img2.src = src1;
// });

/////////////    Task - 3

// var btn =  document.querySelector("button");
// var inps = document.querySelectorAll('input[type="text"]');
// var h4 = document.querySelector('h4');

// btn.addEventListener('click',function(e){
//     e.preventDefault();
//     for(var i=0; i<inps.length; i++){
//         if(inps[i].value.trim() === '')
//         {
//             h4.textContent = "error, please enter values for fields";
//             h4.style.fontFamily = 'gilroy';
//             h4.style.color = 'red';
//             h4.style.fontSize = '12px';
//             break;
//         }
//         else{
//             h4.textContent='';
//         }
//     }
// });

/////////////    Task - 4

// var add =  document.querySelector("#add");
// var remove =  document.querySelector("#remove");
// var ul = document.querySelector('ul');
// var inp = document.querySelector('input');
// var li;

// add.addEventListener('click',function(){
//     if(inp.value.trim() === ''){}
//     else{
//         li = document.createElement('li');
//         li.textContent = inp.value;
//         ul.appendChild(li);
//         inp.value = "";
//     }
// })

// remove.addEventListener('click',function(){
//     ul.removeChild(li);
// })

/////////////    Task - 5

// var btn =  document.querySelector("#start");
// var stop = document.querySelector("#stop");
// var h3 = document.querySelector('h3');
// var inter;

// btn.addEventListener('click',function(){
//     var count = 0;
//     inter = setInterval(function(){
//         h3.textContent=count;
//         count++;
//     },1000)
// })

// stop.addEventListener('click',function(){
//     clearInterval(inter);
// })

/////////////    Task - 6

// var home = document.querySelector('#home');
// var about = document.querySelector('#about');
// var contact = document.querySelector('#contact');

// var hometext = document.querySelector('#hometext');
// var abouttext = document.querySelector('#abouttext');
// var contacttext = document.querySelector('#contacttext1');

// hometext.style.display = "block";

// home.addEventListener("click",function(){
//     hometext.style.display = "block";
//     abouttext.style.display = 'none';
//     contacttexttext.style.display = 'none';
// });

// about.addEventListener("click",function(){
//     hometext.style.display = "none";
//     abouttext.style.display = "block";
//     contacttexttext.style.display = 'none';
// });

// contact.addEventListener("click",function(){
//     hometext.style.display = "none";
//     abouttext.style.display = 'none';
//     contacttext1.style.display = "block";
// });

/////////////    Task - 7

// var download = document.querySelector('#download');

// download.style.width = '360px';
// download.style.height = '10px';
// download.style.backgroundColor = '#dadada';
// download.style.position = 'absolute';
// download.style.top = '50%';
// download.style.left = '50%';
// download.style.transform = 'translate(-50%,-50%)';
// download.style.borderRadius = '100px';


///////////////////////////////

const getuser = document.querySelector("#getuser");

function getNewUser(){
    console.log("hello");
    fetch(`https://randomuser.me/api/`)
    .then(raw => raw.json())
    .then(result => {
    const {name,email,gender,picture} = result.results[0];
    console.log(name);
    console.log(result.results[0]);
    document.querySelector("#parent").innerHTML += `<div class="card w-60 p-4 rounded-xl bg-zinc-800">
    <div class="w-20 h-20 bg-zinc-500 rounded-2xl mb-3 overflow-hidden">
        <img class="w-full h-full fit-cover" src="${picture.large}" alt="">
    </div>
    <h3 class="font-semibold text-2xl">${name.first}</h3>
    <h5 class="text-sm font-semibold opacity-60">${gender}</h5>
    <h6 class="text-sm opacity-40">${email}</h6>
    <p class="mt-5 text-xs font-semibold opacity-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sequi delectus fuga debitis?</p>
</div>`
});
}

getuser.addEventListener('click',function(){
    getNewUser();
})

document.querySelector("body").innerHTML += "<h1>yo</h1>";

