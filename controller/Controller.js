
import LampakView from "../view/LampakView.js";
class Controller{

    #elemview

    constructor() {
        let lista=[true,true,true,true,true,true,true,true,true]
        this.#elemview= new LampakView($('.jatekTer'),lista);
    }
 }
 export default Controller;