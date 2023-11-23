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
        //chamado o metodo setLastnumberToDisplay(), 
        this.setLastNumberToDisplay();

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
    
    }

    /* como temos o botão, como o texto do botão, pode ser que aconteça nos dois
        ao mesmo tempo e passamos um false pra abortar este evento. */

    clearAll(){

        this._operation = [];

        // vamos colocar o metodo setLastNumberDisplay();
        this.setLastNumberToDisplay();

    }

    clearEntry(){

        this._operation.pop();
         // vamos colocar o metodo setLastNumberDisplay();
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
         /*O metodo indexOf vai buscar o value, neste array:
        ['+','-','*','%','/'], se ele achar ele vai trazer o index desse elemento.
        Se ele não encontrar ele vai trazer -1 */

    }

    pushOperation(value){

        this._operation.push(value);

        if (this._operation.length > 3) {
            // aqui estamos tirando o ultimo elemento e guardando na variavel;
            this.calc();
             /*1° Operação: 1° numero,
              2° Operação: Operador, 2° numero,
              Maior que 03 significa mais um sinal, eu quero essa operação aqui
              */
          

             /* siginifica que tem 4 itens no nosso array,
                então quando chegar 4 itens no nosso array a conta vai aparecer;
                */

        }

    }

    calc(){
         /* a variavel last, retira o utimo e armazena;*/
        /*Bom agora no nosso codigo vamos colocar o join, que basicamente,
        e o inverso do split(), que transforma um array em string;
        Nós utilizamos o  events.split(' ').forEach(event => { 
            pois o addEventListerner(); não consegue pegar varios eventos de uma vez;

            o join e mais adequado:
            let result = eval(this._operation(value).join()); */

        let last = this._operation.pop();
        let result = eval(this._operation.join(""));

            /*O resultado desse result, vamos colocar no nosso operation, que será um novo array,
            1° Elemento: a variavel result, o segundo o Last = que retira o ultimo, e os proximos,
              vamos colocar na calculadora;*/

        if(last == '%'){
            
            result = result / 100;
            // ou result /= 100 - tambem daria certo;

            //E assim atualizamos nosso array com a variavel result;

            this._operation = [result];

        }else{
            //continua fazendo o que esta funcionando (aqui fora só salvaremos o resultado!)
 
            this._operation = [result, last];

        }

        
        
        this.setLastNumberToDisplay();

    }

    setLastNumberToDisplay(){
        
        /*Aqui devemos pegar o ultimo numero que eu digitei, (não o ultimo numero do array!)
        Eu preciso percorrer este array, do final para o começo procurando o primeiro numero; */

        let lastNumber;

        for (let i = this._operation.length-1; i >= 0; i--){

            if (!this.isOperator(this._operation[i])) {

                lastNumber = this._operation[i];

                break;
                /* Vamos pegar o this._operation.legth, vamos criar a variavel i
         vamos falar que ele começa no total de itens -1

         1° criamos a variavel i com o valor do meu array
         2° Depois preciso dizer até que momento este for se repita (então);
         3° Vamos usar o operador decremental, e fazer um if() perguntando se e um operador:
         4° this.isOperator() => quem e o operador: this._operator(), na minha posição i.
         5° Ou se não for um operador ( ! ) atributo de negação, ai vou colocar na minha variavel
         6° vai ser armazenado em lastNumber, e chamo meu oobjeto (displayCalc = lastNumber);
         */
            }

        }

        /* Se toda vez que for atualizar isto no meu display 
           eu posso fazer uma verficação:*/
           if(!lastNumber) lastNumber = 0;          

        this.displayCalc = lastNumber;

    }
    // criando um metodo de this._operator.push(value);
    addOperation(value){


        if (isNaN(this.getLastOperation())) {
            // Fazendo nossa verificação, se tem mais de 03 elementos.
            if (this.isOperator(value)) {

                this.setLastOperation(value);
                 /* Ele pergunta: E um operador? o valor atual?;*/


            } else if (isNaN(value)){
                // Isto não e um numero??

                console.log("outra coisa",value);

            } else {
                // então ele vai cair pra cá:
                this.pushOperation(value);
                // Abaixo vamos chamar o displayCalc com o metodo para aparecer na tela:
                this.setLastNumberToDisplay();

            }

        } else {
            // Se for um operador, adiciona outro item no meu array ou seja o sinal:
            if (this.isOperator(value)){

                this.pushOperation(value);

            } else {
                 // Caso não seja: vamos continuar verificando se o ultimo e um numero;
                    // Adicionando o proximo numero, e assim por diante:
                let newValue = this.getLastOperation().toString() + value.toString();
                this.setLastOperation(parseInt(newValue));
                this.setLastNumberToDisplay();

            }

        }

    }
     /* Number; (Se for um numero, eu não quero somar mais um numero, quero concatenar no final);
         no exemplo vai dar "10" + "2" = "102" 
         esse novo valor, vou querer adiciona-lo dentro do meu array = this._operation = [];*/
    
    //     console.log(this._operation);

    setError(){
        // Mensagem de Erro na Tela.

        this.displayCalc = "Error";
        
    }

    execBtn(value){

        switch (value) {
             // Switch Case no parametro value.

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
         /* Este e o switch do metodo execBtn que esta abaixo do:
       textBtn = console.log(btn.className.baseVal.replace("btn-","botão: ")); */

    }

    initButtonsEvents(){
        /*  O add eventlisterner pega somente um evento, não uma lista de elementos.
            vamos percorrer a lista. Para cada botão adiciono o envento a este botão (btn)
            a.split(' '); recebe um parametro que e um separador;*/

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach((btn, index)=>{

            this.addEventListenerAll(btn, "click drag", e => {

                let textBtn = btn.className.baseVal.replace("btn-","");

                this.execBtn(textBtn);

            })
            /* - reaproveitando o mesmo metodo, estou colocando outro envento acima: */
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