
var nombre = "Gabriel Uriel"
var altura = "181"

/*
var concatenacion = nombre + " " + altura;

var datos = document.getElementById("datos");
datos.innerHTML = `
    <h1>Soy la caja de datos</h1>
    <h2>mi nombre es: ${nombre}</h2>
    <h3>Mido: ${altura} cm</h3>
`;

if(altura >= 181){
    datos.innerHTML += `<h1>Eres una persona ALTA</h1>`;
}else{
    datos.innerHTML += `<h1>Eres una persona BAJITA</h1>`;
}

for(var i = 0; i <= 2022; i++){
    //bloque de instrucciones
    datos.innerHTML += "<h2>Estamos en el año: "+i;
}
*/

function MuestraMiNombre(datos, altura){
    var misDatos =`
        <h1>Soy la caja de datos</h1>
        <h2>mi nombre es: ${nombre}</h2>
        <h3>Mido: ${altura} cm</h3>
    `;

    return misDatos;
}

function imprimir(){
    var datos = document.getElementById("datos");
    datos.innerHTML = MuestraMiNombre("Gabriel Flores", 181);
}

imprimir ();

var nombres = ['Gabriel', 'Victor', 'Elena'];

document.write(`<h1>Listado de nombres</h1>`);
/*
for(i = 0; i < nombres.length; i++){
    document.write(nombres[i] + `</br>`);
}
*/
nombres.forEach((nombre) => {
    document.write(nombre + `</br>`);
});
