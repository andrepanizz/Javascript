class CalcController {

    constructor(){
        // Metodo construtor();
        
        this._lastOperator = '';
        this._lastNumber = '';

        this._operation = [];
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
        this.initKeyboard();


    }

    /* Criando os Eventos para o SVG, nesta section */


    copyToClipBoard(){
        // como criamos elementos, desta forma abaixo:

        let input = document.createElement('input');

        input.value = this.displayCalc();
        
        document.body.appendChild(input);

        input.select();

        document.execCommand("Copy");




    }
    
    //                           Inicialização da Calculadora:
    initialize(){

        // time de inicialização;

        this.setDisplayDateTime()

        setInterval(()=>{

            this.setDisplayDateTime();

        }, 1000);

        this.setLastNumberToDisplay();
        // fim da function de inicialização;

        //metodo();
    }

    addEventListenerAll(element, events, fn){
        // transformando um array em string e passando um foreach();
        events.split(' ').forEach(event => {

            element.addEventListener(event, fn, false);



        })
    
    }
   
    clearAll(){

        this._operation = [];

        this.setLastNumberToDisplay();
        this.lastNumber = '';
        this.lastOperation = '';

    }
    
    clearEntry(){

        this._operation.pop();

        this.setLastNumberToDisplay();

    }
   
    getLastOperation(){

        return this._operation[this._operation.length-1];

    }

    
    setLastOperation(value){

        this._operation[this._operation.length-1] = value;

    }
    
    isOperator(value){

        return (['+', '-', '*', '%', '/'].indexOf(value) > -1);

    }
 
    pushOperation(value){

        this._operation.push(value);

        if (this._operation.length > 3) {

            this.calc();

        }

    }
    
    getResult(){



        return eval(this._operation.join(""));

    }
    
    calc(){

        let last = '';
        
        this._lastOperator = this.getLastItem();

        if (this._operation.length < 3) {

            let firstItem = this._operation[0];

            this._operation = [firstItem, this._lastOperator, this._lastNumber];

        }

        if (this._operation.length > 3) {

            last = this._operation.pop();

            this._lastNumber = this.getResult();

        } else if (this._operation.length == 3) {

            this._lastNumber = this.getLastItem(false);

        }
        
        let result = this.getResult();
        // Aqui e a funcão do botão porcentagem quando precionamos
        if (last == '%') {

            result /= 100;

            this._operation = [result];

        } else {

            this._operation = [result];

            if (last) this._operation.push(last);

        }

        this.setLastNumberToDisplay();

    }
    // Ultimo numero digitado.
    getLastItem(isOperator = true){

        let lastItem;
        // variavel last item;

        for (let i = this._operation.length-1; i >= 0; i--){

            if (this.isOperator(this._operation[i]) == isOperator) {
    
                lastItem = this._operation[i];
    
                break;
    
            }

        }

        if (!lastItem) {

            lastItem = (isOperator) ? this._lastOperator : this._lastNumber;

        }

        return lastItem;

    }   
    // Criação de Metodo para inicializar os metodos de Teclado da calculadora:
    initKeyboard(){
        document.addEventListener('keyup', e =>{

        /* Switch passando a function execBtn(value): */
        switch (e.key) {

            case 'Escape':
                this.clearAll();
                break;

            case 'Backspace':
                this.clearEntry();
                break;

            case '+':
            case '-':
            case '*':
            case '/':
            case '%':
                this.addOperation(e.key);
                break;
                           
            case 'Enter':
            case '=':
                this.calc();
                break;

            case '.':
            case ',':
                this.addDot('.');
                break;
                /* Vamos trabalhar agora com o botão ponto..:
                criando o metodo addDot(); */

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(e.key));
                break;

            

        }

    

        });
    }



    // Metodo de mostrar no display;
    setLastNumberToDisplay(){

        let lastNumber = this.getLastItem(false);

        if (!lastNumber) lastNumber = 0;

        this.displayCalc = lastNumber;

    }
    // add Operation (value);
    addOperation(value){


        if (isNaN(this.getLastOperation())) {

            if (this.isOperator(value)) {

                this.setLastOperation(value);

             } else {

                this.pushOperation(value);

                this.setLastNumberToDisplay();

            }

        } else {

            if (this.isOperator(value)){

                this.pushOperation(value);

            } else {

                let newValue = this.getLastOperation().toString() + value.toString();

                this.setLastOperation(newValue);

                this.setLastNumberToDisplay();

            }

        }

    }

    addDot(){

        let lastOperation = this.getLastOperation();

        if(typeof lastOperation === 'string' && lastOperation.split('').indexOf('.') > -1){ return;

        }

        if(this.isOperator(lastOperation) || !lastOperation) {
           this.pushOperation('0.');
        }else{
            this.setLastOperation(lastOperation.toString() + '.');
        }

        this.setLastNumberToDisplay();

    }


    // function setError()..;

    setError(){
        // Mensagem de erro na tela da calculadora !
        this.displayCalc = "Error";
        
    }

    execBtn(value){
        /* Switch passando a function execBtn(value): */
        switch (value) {

            case 'ac':
                this.clearAll();
                break;

            case 'ce':
                this.clearEntry();
                break;

            case 'soma':
                this.addOperation('+');
                break;

            case 'subtracao':
                this.addOperation('-');
                break;

            case 'divisao':
                this.addOperation('/');
                break;

            case 'multiplicacao':
                this.addOperation('*');
                break;

            case 'porcento':
                this.addOperation('%');
                break;

            case 'igual':
                this.calc();
                break;

            case 'ponto':
                this.addDot('.');
                break;
                /* Vamos trabalhar agora com o botão ponto..:
                criando o metodo addDot(); */

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value));
                break;

            default:
                this.setError();
                break;

        }

    }
    // function InitButtonsEvents().
    initButtonsEvents(){

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach((btn, index)=>{

            this.addEventListenerAll(btn, "click drag", e => {

                let textBtn = btn.className.baseVal.replace("btn-","");

                this.execBtn(textBtn);

            })
            // utilizando "mouseover mouseup mousedown: "
            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {
                //funcção de pointer;
                btn.style.cursor = "pointer";

            })

        })

    }
    // setDisplayTime()..;
    setDisplayDateTime(){

        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "long",
            year: "numeric"

        // passsando os dados da calculadora: dia, mês, Ano..!
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);

    }
    // display time;
    get displayTime(){

        return this._timeEl.innerHTML;

    }
    // setar displayTime();
    set displayTime(value){

        return this._timeEl.innerHTML = value;

    }
    // display Date..;
    get displayDate(){

        return this._dateEl.innerHTML;

    }
    // setar displayDate passando parametro Value..;
    set displayDate(value){

        return this._dateEl.innerHTML = value;

    }
    // recuperar displayCalc()..;
    get displayCalc(){

        return this._displayCalcEl.innerHTML;

    }
    // displayCalc;
    set displayCalc(value){

        this._displayCalcEl.innerHTML = value;

    }
    // current Date..;
    get currentDate(){

        return new Date();

    }
    
    // Setar CurrentDate..;
    set currentDate(value){

        this._currentDate = value;

    }

}
/* -----------------Fim do arquivo JS --------------------------- */