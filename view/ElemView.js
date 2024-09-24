class ElemView {
    #index;
    constructor(szuloElem) {
        this.szuloElem=szuloElem;
        this.kattinthato = true;
        this.#htmlOsszerak();
        this.elem = $(".elem:last-child");
    this.pElem = this.elem.children("p");
    this.elem.on("click", () => {
      if (this.kattinthato) {
        this.#sajatEsemenykezelo("kivalaszt");
        this.kattinthato = false;
      }
    });
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