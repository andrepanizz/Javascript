class CalcController {

    constructor(){
        
        this._displaycalcE1 = document.querySelector("");
        this._dateE1 = document.querySelector("");
        this._timeE1 = document.querySelector("");
        this._currentDate;
        this.initialize();
    }
    
    initialize(){


    }

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

}