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
    // metodos:
    // evento de botões;
    initButtonsEvents(){
        /*
        Para entender melhor o QuerySelector, a estrutura basica e:
        Posso pegar o ID buttons *Lembrando de selectores filhos"

        document.querySelector("#buttons > g"), pegue todas as 
        tags "g" que são filhas de buttons;
        além desses temos os #parts > g.
        Pois a resposta que esperamos e pegar todos os "g" que estão
        dentro de Buttons e todos os "g" que estão dentro de parts.
        // por isso temos o querySelectorAll
         */
        let buttons = document.querySelectorAll('#buttons > g, #parts > g');
        /* a diferença entre o querySelector() e o querySelectorAll();
         Ele ira trazer todos os elementos que casam com este conceito; 
         
         
         O addEnventListerner - recebe 02 parametros: 1° qual evento que queremos.
         2° O que eu devo fazer quando este evento acontecer arrowFuction ou envento direto ()=>{}, e=>
         */
            /* - Primeiro devemos percorrer a lista, pois ele e um evento de 1 elemento.
            não de uma lista de elementos - precisaremos criar um laço aqui: */

        buttons.forEach((btn,index)=>{
            // utilizando o forEach para percorer nossos buttons:(nodelist);
            btn.addEventListener('click', e=>{
                console.log(index,btn);
            });
        });
    }
    // meu metodo de data e hora:
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