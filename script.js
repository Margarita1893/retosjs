const retos [
    {nombre= 'reto1', url= './retosh/Reto1/index.html', img=''},
    {nombre= 'reto2', url= './Retos/Reto2/index.html', img: ''},
    {nombre: 'Rotating Navigation', url: './Retos/Reto3/index.html', img:''},
  //   {nombre: "Hidden Search", url: "../retos/Reto4/index.html", img: ""},
  //   {nombre: "Blurry Loading", url: "../retos/Reto5/index.html", img: ""},
  //   {nombre: "Drag N Drop", url: "../retos/Reto6/index.html", img: ""},
  //   {nombre: "AutoText", url: "../retos/Reto7/index.html"


]



const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');

const filtrar = ()=>{
    console.log(formulario.Value);
}

boton.addEventListener('click', filtrar)

