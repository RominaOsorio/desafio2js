let boton = document.querySelector('#boton');
let texto = document.querySelector('#texto');

 boton.addEventListener('click', ()=>{
    let stickerUno = +document.querySelector('#input1').value;
    let stickerDos = +document.querySelector('#input2').value;
    let stickerTres = +document.querySelector('#input3').value;
    let resultado = stickerUno + stickerDos + stickerTres;
     if(resultado <= 10){
        texto.innerHTML = 'Llevas ' + resultado + ' stickers';
      } else {
        texto.innerHTML = 'Llevas muchos sticker, deja algunos para el resto!';
      }
 })
