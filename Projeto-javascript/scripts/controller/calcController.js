class CalcController {

constructor(){
    this._displayCalcEl = document.querySelector("#display");
    this._dateEl = document.querySelector("#data");
    this._timeEl = document.querySelector("#hora");
    this._currentDate;
    this.initialize();
    

    }

    initialize(){

               

        
        this._dateEl.innerHTML = "01/01/2009";
        this._timeEl.innerHTML = "00:00"; 

    }

    // Metodos get and set:

    get displayCalc(){

        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(valor){
        this._displayCalcEl.innerHTML = valor;
    }

    get currentDate() {
        return new Date();
    }

    set currentDate(valor) {
        this._currentDate = valor;
    }


}