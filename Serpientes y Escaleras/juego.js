var table = new tablero;
var j1 = new jugador();
var j2 = new jugador();
var da = new dado();

document.getElementById('p1').addEventListener('click', procesoJuego);
function procesoJuego() {
    let num = da.tirar()
    j1.dadoPosicion(num);
    console.log('------------------------------------------------------------');
    console.log('El resultado del jugador 1 del dado es: ' + num);
    console.log(`Ahora estas en la casillas número: ${j1.posicion}`);
    console.log(table.stair(j1));
    console.log(table.snakes(j1));
    console.log(table.winner(j1));
}
document.getElementById('p2').addEventListener('click', procesoJuego2);
function procesoJuego2() {
    let num2 = da.tirar()
    j2.dadoPosicion(num2);
    console.log('------------------------------------------------------------');
    console.log('El resultado del jugador 2 del dado es: ' + num2);
    console.log(`Ahora estas en la casillas número: ${j2.posicion}`);
    console.log(table.stair(j2));
    console.log(table.snakes(j2));
    console.log(table.winner(j2));
}