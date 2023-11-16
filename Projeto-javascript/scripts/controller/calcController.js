class CalcController {

constructor(){
    this._locale = ("pt-BR");
    this._displayCalcEl = document.querySelector("#display");
    this._dateEl = document.querySelector("#data");
    this._timeEl = document.querySelector("#hora");
    this._currentDate;
    this.initialize();
    this.initButtonsEvents();    
    }
    initialize(){

        this.setdisplayDateTime();

        setInterval(()=>{

        this.setdisplayDateTime();    

        }, 1000);

        /*
        Aqui e um exemplo de que com o setTimeout, em 1 segundo ele começa a rodar, e 
        pode parar no 7 ou 8 seg. 
        este e só um teste desabilitei, pois utilizo agora o metodo setdisplayDateTime ao invés de:

        "this.displayDate = this.currentDate.tolocaleDateString(this.locale)";
        "this.displayTime = this.currentDate.tolocaleTimeString(this.locale)";
        -------------------------------------------------------------------------------------------
        Sendo que o atributo locale dentro do construtor vou utilizar varias vezes.
        pra cortar a redundancia utilizo o metodo.


        let interval = setInterval(()=>{

        }, 1000);

        setTimeout(()=>{
            clearInterval(interval);

        }, 10000);

        */
        
    }
     /*Criando Multiplos Eventos:
     */
     addEventListenerAll(element, events, fn){


        
     }

     initButtonsEvents(){

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");
        // O add eventlisterner pega somente um evento, não uma lista de elementos.
        // vamos percorrer a lista. Para cada botão adiciono o envento a este botão (btn);


        buttons.forEach((btn, index)=>{

            btn.addEventListener('click', e=>{

                console.log(btn.className.baseVal.replace("btn-",""));
            });
        });
     }

    /* meu metodo de data e hora: */
    setdisplayDateTime(){

        this.displayDate = this.currentDate.toLocaleDateString(this._locale,{
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);

    }
    
    get displayTime(){
        return this._timeEl.innerHTML;
    }

    set displayTime(value){
        this._timeEl.innerHTML = value;
    }

    get displayDate(){
        return this._dateEl.innerHTML;
    }

    set displayDate(value){
        return this._dateEl.innerHTML = value;
    }
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