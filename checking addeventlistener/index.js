const button = document.querySelector(".myButton");
const button2 = document.querySelector(".button2");

function addit() {
    button2.addEventListener("click", () => {
        console.log("clicked")
    })
}

button.addEventListener("click", addit);


