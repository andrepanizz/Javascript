class CalcController {

    constructor(){

        this._operation = [];
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();

    }
    //                                        - INITIALIZE - 

    initialize(){

        this.setDisplayDateTime()

        setInterval(()=>{

            this.setDisplayDateTime();

        }, 1000);

    }

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

        //                                        - LISTA DE EVENTOS  - 
    /* 
        Podemos criar os nossos eventos:
        vou passar em cada el. eu quero adicionar o meu evento = events:
         events = todos os eventos.
        element = cada um dos eventos (elemento): */

    addEventListenerAll(element, events, fn){

        events.split(' ').forEach(event => {

            element.addEventListener(event, fn, false);

        })
        /* como temos o botão, como o texto do botão, pode ser que aconteça nos dois
        ao mesmo tempo e passamos um false pra abortar este evento. */
    
    }


     //                               - BUTTONS & GETTERS AND SETTERS - 
    
    // Temos o botão: Limpar tudo.


    clearAll(){

        this._operation = [];

    }

    clearEntry(){

        this._operation.pop();

    }
    // criando um metodo de this._operator.push(value);
    add_Operador(value){
        this._operation.push(value);
    }

    getLastOperation(){

        return this._operation[this._operation.length-1];

         // vamos precisar tratar. este ultimo numero;
        // isNaN(); - para fazer a validação do numero
    }

    setLastOperation(value){

        this._operation[this._operation.length-1] = value;
         // ele ira substituir, pois no console esta desta forma:
        /*O primeiro numero armazenado cai em true, e depois ele não apaga a posição:
         [9 , 92] */


    }

    isOperator(value){

        return (['+', '-', '*', '%', '/'].indexOf(value) > -1);
         /*O metodo indexOf vai buscar o value, neste array:
        ['+','-','*','%','/'], se ele achar ele vai trazer o index desse elemento.
        Se ele não encontrar ele vai trazer -1 */

    }

    addOperation(value){
         /* Irei fazer o add, para isso preciso fazer minha verificação:*/

        console.log('A', value, isNaN(this.getLastOperation()));

        if (isNaN(this.getLastOperation())) {
            /* string - Se for um Operador, ou um Ponto.
             se o ultimo for um operador, preciso trocar o operador; */

            if (this.isOperator(value)) {
                 /* Note que e o mesmo codigo, esse metodo setLastOperation
                  Por isso que criamos um metodo;*/

                this.setLastOperation(value);  // ele trocou o item.

            } else if (isNaN(value)){

                console.log("Outra Coisa;");

            } else {
                
                this.add_Operador(value);

            }

        } else {

            // Se for um operador, adiciona outro item no meu array ou seja o sinal:
                if(this.isOperator(value)){

                     this.add_Operador(value);
                } else {
                    // Caso não seja: vamos continuar verificando se o ultimo e um numero;
                    // Adicionando o proximo numero, e assim por diante:
                    let newValue = this.getLastOperation().toString() + value.toString();
                    this.setLastOperation(parseInt(newValue));
                }
                
        }

         /* Number; (Se for um numero, eu não quero somar mais um numero, quero concatenar no final);
         no exemplo vai dar "10" + "2" = "102" 
         esse novo valor, vou querer adiciona-lo dentro do meu array = this._operation = [];*/
        console.log(this._operation);

    }

    setError(){
        // Mensagem de Erro na Tela.
        this.displayCalc = "Error";
        
    }

    execBtn(value){
        // Switch Case no parametro value.
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
                
                break;

            case 'ponto':
                this.addOperation('.');
                break;

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
    /* Este e o switch do metodo execBtn que esta abaixo do:
       textBtn = console.log(btn.className.baseVal.replace("btn-","botão: ")); */


    initButtonsEvents(){
        /*  O add eventlisterner pega somente um evento, não uma lista de elementos.
            vamos percorrer a lista. Para cada botão adiciono o envento a este botão (btn)
            a.split(' '); recebe um parametro que e um separador;*/
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach((btn, index)=>{

            this.addEventListenerAll(btn, "click drag", e => {

                let textBtn = btn.className.baseVal.replace("btn-","");
                /* - reaproveitando o mesmo metodo, estou colocando outro envento acima: */
                this.execBtn(textBtn);

            })

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {

                btn.style.cursor = "pointer";

            })

        })

    }

    setDisplayDateTime(){
        /* meu metodo de data e hora: */
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
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

        return this._timeEl.innerHTML = value;

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

    set displayCalc(value){

        this._displayCalcEl.innerHTML = value;

    }

    get currentDate(){

        return new Date();

    }

    set currentDate(value){

        this._currentDate = value;

    }

}

/*

<!-- tabela do Ids dos Buttons: -->


<html>
    <body>
        <g id="buttons">
         <g class="btn=ac">_</g>
            <g class="btn-ce">_</g>
            <g class="btn-porcento">_</g>
            <g class="btn-divisão">_</g>
            <g class="btn-9">_</g>
            <g class="btn-6">_</g>
            <g class="btn-3">_</g>
            <g class="btn-soma">_</g>
            <g class="btn-igual">_</g>
            <g class="btn-8">_</g>
            <g class="btn-5">_</g>
            <g class="btn-2">_</g>
            <g class="btn-7">_</g>
            <g class="btn-4">_</g>
            <g class="btn-1">_</g>
            <g class="btn-0">_</g>
            <g class="btn-multiplicação">_</g>
            <g class="btn-subtração">_</g>

        </g>
        <g id="parts">
            <g class="btn-ac">_</g>
            <g class="btn-ce">_</g>
            <g class="btn-porcento">_</g>
            <g class="btn-divisão">_</g>
            <g class="btn-7">_</g>
            <g class="btn-8">_</g>
            <g class="btn-9">_</g>
            <g class="btn-multiplicação">_</g>
            <g class="btn-4">_</g>
            <g class="btn-5">_</g>
            <g class="btn-6">_</g>
            <g class="btn-subtração">_</g>
            <g class="btn-1">_</g>
            <g class="btn-3">_</g>
            <g class="btn-2">_</g>
            <g class="btn-ponto">_</g>
            <g class="btn-)">_</g>
            <g class="btn-igual">_</g>
            <g class="btn-soma">_</g>
        </g>
    </body>
</html>
*/
// fim do arquivo;