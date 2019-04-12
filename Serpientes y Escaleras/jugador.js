class jugador{
    constructor(){
        this.posicion = 0;
    }
    dadoPosicion(tirar){
        this.posicion = this.posicion + tirar;
        if (this.posicion >= 100) {
            this.posicion = 100;
        }
    }
}