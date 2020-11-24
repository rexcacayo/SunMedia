export class Test1{

    
    constructor(rgb, wb){
        this.rgb= rgb;
        this.wb = wb;     
    }



    TxtPregunta(pregunta) {

        const ask = {
            primera: "En el fragmento de código de nuestro archivo (test.js) podemos encontrar hasta 3 variables. ¿Podrías decirnos cuál sería el valor de todas ellas al finalizar la ejecución del script?",
            segunda: "Modifica el código para que las variables rgb y wb mantengan sus valores iniciales y colors tenga los valores de ambas al finalizar la ejecución del script.",
            tercera: "Además, tenemos un bug localizado en dispositivos con Internet Explorer… El código de nuestro script no funciona y necesitamos que se ejecute también en este navegador. ¿Sabrías identificar cuál es el problema? ¿Qué solución nos propones?"
            
        }
        
        if(pregunta === "primera"){
            document.getElementById('txt').innerHTML = ask.primera;    
            return;
        }
        if(pregunta === "segunda"){
            document.getElementById('txt').innerHTML = ask.segunda;      
            return;
        }if(pregunta === "tercera"){
            document.getElementById('txt').innerHTML = ask.tercera;     
        }

            
       

    }
    
    Pregunta1(){
        this.TxtPregunta("primera");
        var colors = Object.assign(this.rgb, this.wb); 
        document.getElementById('answer1').innerHTML = "Variable colors: " + JSON.stringify(colors);
        document.getElementById('answer2').innerHTML = "Variable rgb: " + JSON.stringify(this.rgb);
        document.getElementById('answer3').innerHTML = "Variable wb: " + JSON.stringify(this.wb);
        
    }

    Pregunta2(){
        this.TxtPregunta("segunda");
        var colors = Object.assign({},this.rgb, this.wb); 
        document.getElementById('answer1').innerHTML = "Variable: " + JSON.stringify(colors);
        document.getElementById('answer2').innerHTML = "Variable: " + JSON.stringify(this.rgb);
        document.getElementById('answer3').innerHTML = "Variable: " + JSON.stringify(this.wb);
        
    }

    Pregunta3(){
        this.TxtPregunta("tercera");
        let respuesta = "Mi primera sugerencia sería ejecutar internet explorer y mediante las herramientas de desarrollo buscar la incompatibilidad del navegador, pero la herramienta babel nos trae un plugin generalizado, que ayuda a la transformación del codigo.Por otr lado utilizaria cambiar el user-agents y cambiar los diferentes navegadores en el mismo. Para localizar un bug se puede utilizar un try catch para capturara el error y mirar en caso de que no aprezca mensaje por consola o se erratico el mensaje. Tambien se puede consultar caniuse.com para verificar la compatibilidad con los navegadores. Tambien tenemos broser list comand para ver para que navegadores son compatibles o soportant y se puede definir un target." ;
        document.getElementById('answer1').innerHTML = `${respuesta}`;
        document.getElementById('answer2').innerHTML = "";
        document.getElementById('answer3').innerHTML = "";
    }

    reset(){
        document.getElementById('txt').innerHTML = "";     
        document.getElementById('answer1').innerHTML = "";
        document.getElementById('answer2').innerHTML = "";
        document.getElementById('answer3').innerHTML = "";

    }

    


};

