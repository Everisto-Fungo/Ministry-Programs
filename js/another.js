let divOne = document.querySelector(".another")
let div = document.querySelectorAll(".cv")

div.forEach(element => {
    element.addEventListener("click", function (e) {
    console.log(e.target.textContent.toLowerCase())
    divOne.textContent=e.target.textContent
    })
});

