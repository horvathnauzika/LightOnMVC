class Modell {
    #lista = [];
    #index;
    #db;
    constructor() {
        this.#lista = [false, false, false, false, false,false,false,false,false];
        this.#db = 0;
    }
    let txt="";
    for (let i = 0; i< 9; i++) {
        txt+= `<div class="lampa" id="${i}"><p></p></div>`
    }
    txt += "";
    this.#szuloElem.append(txt)
 }