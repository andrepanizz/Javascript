class CalcController {
    // metodo Construtor:
    constructor(){
        /* $this.e comum dentro de orientação a objetos*/
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this.displayCalc = "0";
        this.currentDate;
        this.initialize();
      }
    initialize(){
        // Document object Model: or DOM
           

            displayCalcEl.innerHTML = "123456";
            dateEl.innerHTML = "01/05/2020";
            timeEl.innerHTML = "00:00";

    }
    
    /*Criando Getters and Setters: */
    get displayCalc(){

        return this._displayCalc;
        
    }

    set displayCalc(valor) {
        this._displayCalc = valor
    }

    get dataAtual(){
        return this._currentDate;
    }

    set dataAtual(valor){
        this._currentDate = valor;
    }
}
