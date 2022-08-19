let btn = document.querySelector(".hidden");

function mostrar() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("active");
}

btn.addEventListener("click", mostrar);

let descer = document.querySelector(".open");

function mostrarSub() {
    const subprodutos = document.querySelector(".subprodutos");
    subprodutos.classList.toggle("active");
}

descer.addEventListener("mouseon", mostrarSub);

console.log(descer);