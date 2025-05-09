document.addEventListener("DOMContentLoaded", () => {
  const header = `
    <header>
      <div class="top-bar">
        <input type="text" placeholder="Buscar..." id="busqueda">
        <button class="nav-toggle" aria-label="Menú">
          ☰
        </button>
      </div>
      <nav class="nav-menu">
        <ul>
          <li><a href="#">Juegos</a></li>
          <li><a href="#">Consolas</a></li>
          <li><a href="#">Periféricos</a></li>
        </ul>
      </nav>
    </header>
  `;

  const footer = `
    <footer>
      <p>Valentin Reyes 7MO 1ra Programacion Grupo A</p>
    </footer>
  `;

  document.getElementById("header").innerHTML = header;
  document.getElementById("footer").innerHTML = footer;

  const toggleBtn = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Redirigir al hacer click en el campo de búsqueda
  const busqueda = document.getElementById('busqueda');
  busqueda.addEventListener('focus', () => {
    window.location.href = "pagina1.html"; // Redirige a pagina1.html
  });

  // Redirigir al hacer click en el ícono (nav-toggle)
  const navToggle = document.querySelector('.nav-toggle');
  navToggle.addEventListener('click', () => {
    window.location.href = "index.html"; // Redirige a index.html
  });
});
