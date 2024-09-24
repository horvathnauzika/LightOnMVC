import ElemView from "../view/ElemView.js";
class Controller{

    #elemview

    constructor() {
        this.#elemview= new ElemView($('.jatekTer'));
    }
 }
 export default Controller;