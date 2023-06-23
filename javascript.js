var nombres = ["Mauricio", "Uziel", "Antony", "Arath", "Vlad", "Cristian"];
var apellidos = ["Roca", "Balam", "Mizael", "Dzul", "Cachon", "Obrian", "Lona"];


function generarNombre() 
{

    var nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];


        var apellidoAleatorio = apellidos[Math.floor(Math.random() * apellidos.length)];


     var nombreCompleto = nombreAleatorio + " " + apellidoAleatorio;


  document.getElementById("nombreCompleto").textContent = nombreCompleto;
}
