let imagen = document.querySelector("#imagen");

 imagen.addEventListener("click", () => {
    if (imagen.style.border == "none") {
      imagen.style.border = "2px solid red";
    } else {
      imagen.style.border = "none";
    }
  });




