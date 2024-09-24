class ElemView {
    #index;
    constructor(szuloElem,index) {
        this.#index = index;
        this.szuloElem=szuloElem;
        this.kattinthato = true;
        this.#htmlOsszerak();
        this.elem = $(".elem:last-child");
    this.pElem = this.elem.children("p");
    this.elem.on("click", () => {
     
    });
    }

    #htmlOsszerak(){
       
    }
    
 }
 export default ElemView;