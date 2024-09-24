import ElemView from "./ElemView.js";

class LampakView {
    #lista = [];
    constructor(szuloElem,lista) {
        this.#lista=lista;
        this.szuloElem=szuloElem;
        console.log(this.szuloElem);
        console.log(this.#lista);
        this.#htmlOsszerak();
    }

    #htmlOsszerak(){
       
        for (let i = 0; i< 9; i++) {
           new ElemView(this.szuloElem,this.#lista[i],i)
        }
        
  
    }
    
 }
 export default LampakView;