document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById("btnContacto");
  const btnMenu = document.getElementById('btnMenu');
  const menu = document.getElementById('menu');

  if (btnMenu && menu) {
    btnMenu.addEventListener("click", function () {
      menu.classList.toggle("active");
      console.log("click menú");
      // Cambiar icono
      btnMenu.textContent = menu.classList.contains('active') ? '✕' : '☰';
    });
    // Cerrar menú al clickear enlace
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('active');
        btnMenu.textContent = '☰';
      });
    });

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
  }
});

