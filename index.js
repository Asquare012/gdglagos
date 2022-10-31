let button = document.querySelector("#hit");
let alt = document.querySelector("#alert");
button.addEventListener("click", magic);

function magic() {
    let inp = document.querySelector("#names");
    if (inp.value.length == 0) {
        alt.innerHTML = "please, input your name in the above space.";
        inp.focus();
    } else {
        location.href = "gdg.html";
    }
}