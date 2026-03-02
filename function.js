(function(){

const a = "98452716304857162938475610293847";

let b = document.getElementById("system-core");
if(!b){
    b = document.createElement("div");
    b.id = "system-core";
    b.style.display = "none";
    document.body.appendChild(b);
}

b.setAttribute("data-core", a);

document.addEventListener("DOMContentLoaded", function(){
    let c = document.querySelector("html");
    if(c){
        c.setAttribute("data-sys", a.substring(0,12));
    }
});

})();
