class tablero{
       lugar(tirar){
        this.lugar = jugador.posicion
    }
    snakes(jugador){
        if (jugador.posicion == 38) {
            jugador.posicion = 20;
            return `Acabas de caer en una serpiente D: ahora tu posición es la casilla ${jugador.posicion}`;
        }
        else if (jugador.posicion == 51){
            jugador.posicion = 10;
            return `Acabas de caer en una serpiente D: ahora tu posición es la casilla ${jugador.posicion}`;
        }
        else if (jugador.posicion == 76){
            jugador.posicion = 54;
            return `Acabas de caer en una serpiente D: ahora tu posición es la casilla ${jugador.posicion}`;
        }
        else if (jugador.posicion == 91){
            jugador.posicion = 73;
            return `Acabas de caer en una serpiente D: ahora tu posición es la casilla ${jugador.posicion}`;
        }
        else if (jugador.posicion == 97){
            jugador.posicion = 61;
            return `Acabas de caer en una serpiente D: ahora tu posición es la casilla ${jugador.posicion}`;
        }
        else{
            return `No haz caido en ninguna serpiente sigue así Cx`;
        }
    }
    stair(jugador){
        if (jugador.posicion == 5) {
            jugador.posicion = 58;
            return `Acabas de subir en una escalera :D ahora tu posición es la casilla ${jugador.posicion}`;
        }
        else if (jugador.posicion == 14) {
            jugador.posicion = 49;
            return `Acabas de subir en una escalera :D ahora tu posición es la casilla ${jugador.posicion}`;
        }
        else if (jugador.posicion == 53) {
            jugador.posicion = 72;
            return `Acabas de subir en una escalera :D ahora tu posición es la casilla ${jugador.posicion}`;
        }
        else if (jugador.posicion == 64) {
            jugador.posicion = 83
            return `Acabas de subir en una escalera :D ahora tu posición es la casilla ${jugador.posicion}`;
        }
        else{
            return `No haz subido a una escalera, suerte para la siguiente :P`;
        }
    }
    winner(jugador){
        if (jugador.posicion == 100) {
            return `FELICIDADES HAZ GANADO EL JUEGO :D`;
        }
        else{
            return `Sigue jugando, aún no ganas.`;
        }
    }
}