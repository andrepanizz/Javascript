class CalcController {

constructor(){

    this._diplayCalc = "0";
    this._currentDate;
    this.initialize();
    

    }

    initialize(){

        let displayCalcEl = document.querySelector("#display");
        let dateEl = document.querySelector("#data");
        let timeEl = document.querySelector("#hora");

        displayCalcEl.innerHTML = "1234567";
        dateEl.innerHTML = "01/01/2009";
        timeEl.innerHTML = "00:00"; 

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