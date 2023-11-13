class CalcController {

constructor(){

    this._diplayCalc = "0";
    this._dataAtual;
    

    }

    // Metodos get and set:

    get displayCalc(){

        return this._displayCalc;
    }

    set displayCalc(valor){
        this.displayCalc = valor;
    }


}