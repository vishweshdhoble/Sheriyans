const getuser = document.querySelector("#getuser");

getuser.addEventListener('click',function(){
    getNewUser();
})

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

// local storage use

const block=document.querySelector("#block");
const unblock=document.querySelector("#unblock");

show();

block.addEventListener('click',function(){
    localStorage.setItem('block',true);
    show();
})

unblock.addEventListener('click',function(){
    localStorage.setItem('block',false);
    show();
})

function show(){
    if(localStorage.getItem("block")==='false')
    {
        document.querySelector('#status span').textContent = "Not Blocked";
    }
    else{
        document.querySelector('#status span').textContent = "Blocked";

    }
}

var stopbtn = document.querySelector("#stopscroll");

stopbtn.addEventListener('click',function(){
    document.body.classList.toggle("overflow-hidden");

    if(stopbtn.textContent === "Stop scroll")
    {
        stopbtn.textContent = "Enable scroll";
        stopbtn.style.backgroundColor = "green";
    }
    else{
        stopbtn.textContent = "Stop scroll";
        stopbtn.style.backgroundColor = "red";
    }
})