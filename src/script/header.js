import "../styles/header.css";

const header = document.createElement("nav");
header.classList.add(
  "navbar",
  "fixed-top",
  "bg-dark",
  "navbar-dark",
  "navbar-expand-sm"
);
header.innerHTML = `
<div class="container">
    <a class="navbar-brand main" href="#">Ginger</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
        <h5 class="offcanvas-title main" id="offcanvasNavbarLabel">Ginger</h5>
        <button type="button" class="btn-close btn-close-white" style = "color: white;" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
            <a class="nav-link main active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
            <a class="nav-link about" href="#">about</a>
            </li>
            <li class="nav-item">
                <a class="nav-link menu" href="#">Menu</a>
            </li>
        </ul>
        </div>
    </div>
</div>    
`;

export { header };
