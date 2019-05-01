var table = new tablero;
var j1 = new jugador();
var j2 = new jugador();
var da = new dado();

document.getElementById('p1').addEventListener('click', procesoJuego);
function procesoJuego() {
    let num = da.tirar()
    j1.dadoPosicion(num);
    document.getElementById('res1').innerHTML += `<p>El resultado del jugador 1 del dado es: ${num}</p>`;
    document.getElementById('res1').innerHTML += `<p>Ahora estas en la casillas número: ${j1.posicion}</p>`;
    document.getElementById('res1').innerHTML += table.stair(j1);
    document.getElementById('res1').innerHTML += table.snakes(j1);
    document.getElementById('res1').innerHTML += table.winner(j1);
    document.getElementById('res1').innerHTML += '<p>------------------------------------------------------------</p>'
}
document.getElementById('p2').addEventListener('click', procesoJuego2);
function procesoJuego2() {
    let num2 = da.tirar()
    j2.dadoPosicion(num2);
    document.getElementById('res2').innerHTML += `<p>El resultado del jugador 2 del dado es: ${num2}</p>`;
    document.getElementById('res2').innerHTML += `<p>Ahora estas en la casillas número: ${j2.posicion}</p>`;
    document.getElementById('res2').innerHTML += table.stair(j2);
    document.getElementById('res2').innerHTML += table.snakes(j2);
    document.getElementById('res2').innerHTML += table.winner(j2);
    document.getElementById('res2').innerHTML += '<p>------------------------------------------------------------</p>'
}