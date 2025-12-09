let btn = document.getElementById("btnContacto");
btn.addEventListener("click", function () {
    alert("Puedes contactarme al correo: germandcruzg@gmail.com");
});
let btnMenu = document.getElementById("btnMenu");
let menu = document.getElementById("menu");

btnMenu.addEventListener("click", () => {
    menu.classList.toggle("active");
});
