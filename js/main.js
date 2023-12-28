 
/*  =========================    active links ============================*/

 
function activarLink(linkId) {
  // Obtener todos los elementos <a> dentro del menú
let  enlaces = document.querySelectorAll('header nav ul li a ');

  // Iterar sobre los enlaces y remover la clase 'activo'
  enlaces.forEach(function(enlace) {
    enlace.classList.remove('active');
  });

  // Agregar la clase 'activo' solo al enlace clicado
let linkActivar = document.getElementById(linkId);
  linkActivar.classList.add('active');
}

 





/*  =========================  typed js ============================*/

const typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer", "Electrician", "Aeronautical Assembler"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });



/*  =========================  scroll reveal ============================*/

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal("#home, .services-title", { origin: "top" });
ScrollReveal().reveal(
  ".card",
  { origin: "bottom" }
);
ScrollReveal().reveal(".services", { origin: "left" });
ScrollReveal().reveal(".logo, .container-form, .social-media, .btn-services", { origin: "right" });


/*  =========================    slider ============================*/
 
let imagenes = [
   
    "img-slider/morty.png",
    "img-slider/particulas.png",
    "img-slider/pokemon.png",
    "img-slider/skill.png",
    "img-slider/webdocu.png",
    "img-slider/carrusel.png",
    "img-slider/women.png",
  ];
  
  document.Imagen.src = imagenes[0];
  
  let slider_der = document.querySelector(".slider-der");
  let slider_izq = document.querySelector(".slider-izq");
  let contador = 0;
  
  function mover_der() {
    contador++;
    if (contador > imagenes.length - 1) {
      contador = 0;
    }
    document.Imagen.src = imagenes[contador];
  }
  
  let timeIntervalo = 2000;
  let intervalo = setInterval(mover_der, timeIntervalo);
  
  slider_der.addEventListener("click", () => {
    clearInterval(intervalo);
    mover_der();
    intervalo = setInterval(mover_der, timeIntervalo);
  });
  
  function mover_izq() {
    contador--;
    if (contador < 0) {
      contador = imagenes.length - 1;
    }
    document.Imagen.src = imagenes[contador];
  }
  
  slider_izq.addEventListener("click", () => {
    clearInterval(intervalo);
    mover_izq();
    intervalo = setInterval(mover_der, timeIntervalo);
  });
 