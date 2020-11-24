export class Test2{
    
    constructor(){
           
    }
    
    Pregunta1(){
        this.TxtPregunta('enunciado');
        this.TxtPregunta('primera');
        this.TxtRespuesta('primera');
        for (var i = 0; i < 5; i++) {
            setTimeout(function () {
                console.log(i);
                alert(i);
            }, 1000)
        }

    }

    Pregunta2(){
        this.TxtPregunta('enunciado');
        this.TxtPregunta('segunda');
        this.TxtRespuesta('segunda');
        setTimeout(function () {
        for (var i = 0; i < 5; i++) {
            console.log(i);
        }
    }, 1000)
    }


    TxtPregunta(pregunta) {

        const ask = {
            enunciado: "El fragmento de código de nuestro fichero test.js nos devuelve un output no deseado. Queremos imprimir un valor incremental a cada segundo pero lo que nos devuelve el código es el mismo valor en cada iteración. Sin necesidad de ejecutar el código, ¿sabrías decirnos qué valor imprimiría por consola el script? ¿Cuál es el motivo?",
            primera: "Sin necesidad de ejecutar el código, ¿sabrías decirnos qué valor imprimiría por consola el script? ¿Cuál es el motivo?",
            segunda: "Sabiendo que el output que buscamos es el que encuentras bajo estas líneas… ¿Cómo solucionarías el fragmento de código para que el output sea el deseado?" 
            
        }

        if(pregunta === "enunciado"){
            document.getElementById('enunciado').innerHTML = ask.primera;     
            return;
        }


        if(pregunta === "primera"){
            document.getElementById('txtTest2').innerHTML = ask.primera;     
            return;
        }

        if(pregunta === "segunda"){
            document.getElementById('txtTest2').innerHTML = ask.segunda;      
            return;
        }

            
       

    }

    TxtRespuesta(respuesta){
        const answer = {
            primera:"El valor que aprace es el final, debido a que la funcion timeout retiene un segundo la ejecución del script pero el bucle for continua por ende el primer valor que aparece es el final del ciclo for con un retraso de un segundo en cada valor. Con un alert se aprecia mejor su funcionamientop.",
            segunda:"Se engloba la funcion desde el la funcion timeout. El bucle se pone interno y el tiempo de espera es una vez que haya terminado la ejecucion del bucle for."
        }
        if(respuesta === "primera"){
            document.getElementById('Test2Answer1').innerHTML = answer.primera;    
            return;
        }

        if(respuesta === "segunda"){
            document.getElementById('Test2Answer1').innerHTML = answer.segunda;   
            return;
        }

    }

    reset(){
        document.getElementById('enunciado').innerHTML = ''; 
        document.getElementById('txtTest2').innerHTML = '';    
        document.getElementById('Test2Answer1').innerHTML = '';      

    }
}

