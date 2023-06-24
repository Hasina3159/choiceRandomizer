let text = document.getElementById("text");
let container = document.getElementById("container");
let all = document.getElementById("all");
let modal = document.getElementById("my-modal");
let here = document.getElementById("here");
btn = document.getElementById("btn");
let t = [];
let n;
text.addEventListener("keypress", (e)=>{
    mp()
})

btn.addEventListener("click", ()=>{
    mp()
    n = Math.random()*(t.length-1);
    n = n - (n%1);
    here.innerText = t[n];
    console.log(t)
})

function mp(){
    let intermediaire = text.value + ","
    t = intermediaire.split(",");
    all.innerHTML = ""
    console.log(t)
    t.map((elm) => {
        if(elm){
        let div = document.createElement("div");
        div.className = "all col";
        div.innerText = elm;
        all.appendChild(div);
    }
})
}