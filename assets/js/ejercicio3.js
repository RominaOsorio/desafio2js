let boton = document.querySelector('#boton');
let texto = document.querySelector('#texto');

boton.addEventListener('click', ()=>{
    let selectorUno = document.querySelector('#selector1').value;
    let selectorDos = document.querySelector('#selector2').value;
    let selectorTres = document.querySelector('#selector3').value;
    let password = selectorUno + selectorDos + selectorTres;
     if( password == 911){
        texto.innerHTML = 'Password 1 correcta';
      } else if(password == 714) {
        texto.innerHTML = 'Password 2 correcta';      
    } else{
        texto.innerHTML = 'La contraseña es incorrecta ¡Sigue Participando!';
    }
 });
