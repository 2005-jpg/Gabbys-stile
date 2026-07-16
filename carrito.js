let carrito=[];

function agregar(nombre,precio){

carrito.push({

nombre,

precio

});

localStorage.setItem("carrito",JSON.stringify(carrito));

alert(nombre+" agregado al carrito");

}
