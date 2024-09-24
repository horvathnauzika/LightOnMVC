class ElemView {
    #index;
    constructor(szuloElem,ertek,index) {
        this.#index = index;
        this.szuloElem=szuloElem;
        this.kattinthato = true;
        this.ertek=ertek;
        this.#htmlOsszerak();
        this.elem = $(".lampa:last");
    
    this.elem.on("click", () => {
     console.log(this.#index)
    });
    }

    #htmlOsszerak(){
        let txt=""; 
        if(this.ertek===false){
            txt+= `<div class="lampa sarga" ><p></p></div>`
        }else{
        txt+= `<div class="lampa zold"><p></p></div>`
        }
        this.szuloElem.append(txt)
    }
    
 }
 export default ElemView;