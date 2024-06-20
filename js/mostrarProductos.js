import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]");

export default function crearCard(imagen,nombre,precio,id){
    const producto = document.createElement("li");
    producto.className = "product__card";

    producto.innerHTML = `
        <img src="${imagen}" alt="${nombre}" class="product_image">
        <p class="title__card">${nombre}</p>
        <div class="description">
            <p class="precio">$${precio}</p>
            <button type="button" class="trash_button" data-id="${id}">
                <img src="images/🦆 icon _trash 2_.svg" class="trash">
            </button>
        </div>
    `;

    const deleteButton = producto.querySelector(".trash_button");
    console.log(deleteButton)
    deleteButton.addEventListener("click", () => {
        conexionAPI.eliminarProducto(id)
            .then(() => {
                producto.remove();
            })
            .catch(err => console.log(err));
    });

    return producto;
}
async function listarProductos(){
    try{
        const listarAPI= await conexionAPI.listarProductos()

        listarAPI.forEach(producto => lista.appendChild(crearCard(producto.img,producto.nombre,producto.precio,producto.id)));

    }catch{
        lista.innerHTML = `<h2 class="mensaje__titulo">Ha ocurrido un problema con la conexion :(</h2>`
    }

}

listarProductos()
