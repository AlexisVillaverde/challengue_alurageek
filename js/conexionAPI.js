async function listarProductos(){
    const conexion = await fetch("http://localhost:3001/productos");
    const conexionConvertida = await conexion.json();
    
    return conexionConvertida;
}

async function agregarProducto(imagen,nombre,precio){
    const conexion = await fetch("http://localhost:3001/productos",{
        method: "POST",
        headers: {"Content-type":"application/json"},
        body:JSON.stringify({
            "nombre": nombre,
            "precio":precio,
            "img":imagen
        })
    });
    const conexionConvertida = await conexion.json();

    if(!conexion.ok){
        throw new Error("Ha ocurrido un error al enviar el video");
    }

    return conexionConvertida;

}   

async function eliminarProducto(id){
    const conexion = await fetch(`http://localhost:3001/productos/${id}`,{
        method: "DELETE",
        headers: {"Content-type":"application/json"}
    })

    const conexionConvertida = await conexion.json();

    //UPDATE THE FRONTEND
    if(conexion.ok){
        return conexionConvertida
    }else{
        alert(conexionConvertida.error);
    }
    
}

export const conexionAPI={
    listarProductos, agregarProducto, eliminarProducto
}
