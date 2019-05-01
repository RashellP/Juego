class tablero{
       lugar(tirar){
        this.lugar = jugador.posicion
    }
    snakes(jugador){
        if (jugador.posicion == 38) {
            jugador.posicion = 20;
            return `<p>Acabas de caer en una serpiente D: ahora tu posición es la casilla ${jugador.posicion}</p>`;
        }
        else if (jugador.posicion == 51){
            jugador.posicion = 10;
            return `<p>Acabas de caer en una serpiente D: ahora tu posición es la casilla ${jugador.posicion}</p>`;
        }
        else if (jugador.posicion == 76){
            jugador.posicion = 54;
            return `<p>Acabas de caer en una serpiente D: ahora tu posición es la casilla ${jugador.posicion}</p>`;
        }
        else if (jugador.posicion == 91){
            jugador.posicion = 73;
            return `<p>Acabas de caer en una serpiente D: ahora tu posición es la casilla ${jugador.posicion}</p>`;
        }
        else if (jugador.posicion == 97){
            jugador.posicion = 61;
            return `<p>Acabas de caer en una serpiente D: ahora tu posición es la casilla ${jugador.posicion}</p>`;
        }
        else{
            return `<p>No haz caido en ninguna serpiente sigue así Cx</p>`;
        }
    }
    stair(jugador){
        if (jugador.posicion == 5) {
            jugador.posicion = 58;
            return `<p>Acabas de subir en una escalera :D ahora tu posición es la casilla ${jugador.posicion}</p>`;
        }
        else if (jugador.posicion == 14) {
            jugador.posicion = 49;
            return `<p>Acabas de subir en una escalera :D ahora tu posición es la casilla ${jugador.posicion}</p>`;
        }
        else if (jugador.posicion == 53) {
            jugador.posicion = 72;
            return `<p>Acabas de subir en una escalera :D ahora tu posición es la casilla ${jugador.posicion}</p>`;
        }
        else if (jugador.posicion == 64) {
            jugador.posicion = 83
            return `<p>Acabas de subir en una escalera :D ahora tu posición es la casilla ${jugador.posicion}</p>`;
        }
        else{
            return `<p>No haz subido a una escalera, suerte para la siguiente :P</p>`;
        }
    }
    winner(jugador){
        if (jugador.posicion == 100) {
            return `<p>FELICIDADES HAZ GANADO EL JUEGO :D</p>`;
        }
        else{
            return `<p>Sigue jugando, aún no ganas.</p>`;
        }
    }
}