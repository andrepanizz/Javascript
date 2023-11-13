class CalcController {

    constructor(){
        /*Metodo construtor: */

        this._displaycalcE1 = document.querySelector("");
        this._dateE1 = document.querySelector("");
        this._timeE1 = document.querySelector("");
        this._currentDate;
        this.initialize();
    }
    /* function initialize: */
    initialize(){


    }

// getters and setters:

get displaycalc(){
    return this._displaycalc;
}

set displaycalc(value){
    this._displayCalc = value;

}

get Date(){
    return this._currentDate;
}

set Date(value){
    this._currentDate = value;
}
// fim dos getters and setters
}