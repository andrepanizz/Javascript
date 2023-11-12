class CalcController {
    // metodo Construtor:
    constructor(){
        /* $this.e comum dentro de orientação a objetos*/
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this.currentDate;
        this.initialize();
      }

    initialize(){
        // Document object Model: or DOM
           

            
            dateEl.innerHTML = "01/05/2020";
            timeEl.innerHTML = "00:00";

    }
    
    /*Criando Getters and Setters: */
    get displayCalc(){

        return this._displayCalcEl.innerHTML;
        
    }

    set displayCalc(valor) {
        this._displayCalcEl.innerHTML = valor;
    }

    get dataAtual(){
        return this._currentDate;
    }

    set dataAtual(valor){
        this._currentDate = valor;
    }
}
