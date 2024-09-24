class ElemView {
    #szuloElem;
    constructor(szuloElem) {
        this.#szuloElem=szuloElem;
        this.#htmlOsszerak();
    }

    #htmlOsszerak(){
        let txt="";
        for (let i = 0; i< 9; i++) {
            txt+= `<div class="lampa" id="${i}"></div>`
        }
        this.#szuloElem.append(txt)
    }
 }
 export default ElemView;