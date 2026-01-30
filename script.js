const btn = document.getElementById("btnContacto");
const btnMenu = document.getElementById("btnMenu");
const menu = document.getElementById("menu");

if (btn) {
  btn.addEventListener("click", () => {
    Swal.fire({
      title: '¡Hola!',
      text: 'Puedes escribirme al correo: germandcruzg@gmail.com',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });
  });
}

if (btnMenu && menu) {
  btnMenu.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}
