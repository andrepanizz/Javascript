class CalcController {

constructor(){

    this._diplayCalc = "0";
    this._currentDate;
    this.initialize();
    

    }

    initialize(){

        document.querySelector("#display");
        document.querySelector("#display");
        document.querySelector("#display");

    }

    // Metodos get and set:

    get displayCalc(){

        return this._displayCalc;
    }

    set displayCalc(valor){
        this._displayCalc = valor;
    }

    get currentDate() {
        return this._currentDate;
    }

    set currentDate(valor) {
        this._currentDate = valor;
    }


}