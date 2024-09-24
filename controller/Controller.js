
import LampakView from "../view/LampakView.js";
class Controller{

    #elemview

    constructor() {
        let lista=[false, false, false, false, false,false,false,false,false]
        this.#elemview= new LampakView($('.jatekTer'),lista);
    }
 }
 export default Controller;