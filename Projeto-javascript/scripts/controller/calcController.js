class CalcController {

constructor(){
    this._operation = []; // vamos popular nosso array com as operações;
    this._locale = ("pt-BR");
    this._displayCalcEl = document.querySelector("#display");
    this._dateEl = document.querySelector("#data");
    this._timeEl = document.querySelector("#hora");
    this._currentDate;
    this.initialize();
    this.initButtonsEvents();
    // this.addEventListenerAll(); propriedade não pode ser lida e indefinida!
}
/////////////////////////////////////// - INITIALIZE - ////////////////////////////////////////////
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
/////////////////////////////////////  - LISTA DE EVENTOS  - ///////////////////////////////////////////////////////

    //Podemos criar os nossos eventos:
    // vou passar em cada el. eu quero adicionar o meu evento = events:
            // events = todos os eventos.
            // element = cada um dos eventos (elemento):

    addEventListenerAll(element, events, fn){
        
        events.split(' ').forEach(event => {
            
            element.addEventListener(event, fn, false);

        }); 

        /* como temos o botão, como o texto do botão, pode ser que aconteça nos dois
        ao mesmo tempo e passamos um false pra abortar este evento. */
       
    }
 
//////////////////////////////////// - BUTTONS & GETTERS AND SETTERS - ////////////////////////////////////////
    
    // Temos o boatão: Limpar tudo.
    clearAll(){
        this._operation = [];
    }

    // Metodo que pega a ultima posição do array => this._operations = [];
    getLastOperation(){

        return this._operation[this._operation.length-1];
        
    }
    /*NOTA: O isNaN() serve pra achar os botões que não são numericos; */

     // Botão Cancelar Entrada.
     clearEntry(){
        this._operation.pop();
    }

    /* podemos dentro deste metodo criar um array so pra sinais:*/

    isOperator(value) {

       return (['+','-','*','%','/'].indexOf(value) > -1);
         /* Este metodo indexof - vai buscar o valor no array
         value = ['+'], ['-'] 
         Se ele encontrar, ele vai trazer o index desse elemento.
         e se ele não encontrar, ele vai trazer -1*/
        
    }
    /* Push Adcionar Operação. */
    addOperation(value){   //se não for um numero vai dar False (value). 

        /* Se o ultimo numero não for numero faço a minha verificação com isNaN()
           pegando o getLastOperation */

           if(isNaN(this.getLastOperation())){
                /*Se este valor for um operador (+ ou - ou . etc..) */
                if(this.isOperator(value)){

                    //eu vou pegar o valor do ultimo item pra mim trocar:

                    this._operation[this._operation.length-1] = value;
                    /*O meu ultimo item vai ser igual ao meu operador do momento
                    ele substitui ele trocou (Não adicionou) */


                }else{
                    // Outra coisa;
                    console.log(value);

                }
           }else{
                /* Vamos pegar o ultimo valor que foi digitado: this.getLastOperation();
                   converto ela em string. e armazeno em uma variavel */
              let newValue =  this.getLastOperation.toString() + value.toString();
                // esse novo valor eu adiciono no meu array();
              this._operation.push(newValue);
            }


        console.log(this._operation); //mostra como ta meu array;
    }
    // Mensagem de Erro na Tela.
     setError(){
        this.displayCalc = "Error";
    }
    // Switch Case no parametro value.
    execBtn(value){
        switch(value) {
            case 'ac':
                this.clearAll();
            break;
            case 'ce':
                this.clearEntry();
            break;
            case 'soma':
                this.addOperation('+');
            break;
            case 'subtraçao':
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

        // O add eventlisterner pega somente um evento, não uma lista de elementos.
        // vamos percorrer a lista. Para cada botão adiciono o envento a este botão (btn)

        // a.split(' '); recebe um parametro que e um separador;
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach((btn, index)=>{
            
            this.addEventListenerAll(btn,"click drag", e => {

                let textBtn = console.log(btn.className.baseVal.replace("btn-",""));
                // adicionei a variavel do botão na function execBtn();

                this.execBtn(textBtn);                
            });
                      
            /* - reaproveitando o mesmo metodo, estou colocando outro envento acima: */
            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e=>{
                btn.style.cursor = "pointer";

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