class ElemView {
    #szuloElem;
    constructor(szuloElem) {
        this.#szuloElem=szuloElem;
        this.#htmlOsszerak();
    }

    #htmlOsszerak(){
        let txt="";
        for (let i = 0; i< 9; i++) {
            txt+= `<div class="lampa" id="${i}"><p></p></div>`
        }
        txt += "";
        this.#szuloElem.append(txt)
    }
    
 }
 export default ElemView;