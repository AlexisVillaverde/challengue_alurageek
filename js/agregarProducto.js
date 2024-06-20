import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function crearProducto(e){
    e.preventDefault();
    const nombre = document.querySelector("[data-name]").value;
    const precio = document.querySelector("[data-precio]").value.toString();
    const imagen = document.querySelector("[data-imagen]").value;

    try{
        await conexionAPI.agregarProducto(imagen,nombre,precio);
        window.location.href="../pages/producto-añadido.html";
    }catch(e){
        alert(e)
    }
}

formulario.addEventListener('submit',e=> crearProducto(e));