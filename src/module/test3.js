export class Test3{

    TxtPregunta(pregunta) {
        const ask = {
            enunciado: "En este caso, tenemos un código usando el objeto Promise (Promesa). Las promises (promesas) nos permiten manejar situaciones asíncronas en nuestras ejecuciones, pero tenemos un pequeño problema… No es una solución totalmente cross-browser. Sabemos que no funciona en Internet Explorer así que nos gustaría saber cómo modificarías nuestro código (test.js) para que funcione correctamente.",
        }
        if(pregunta === "enunciado"){
            document.getElementById('txtTest3').innerHTML = ask.enunciado;     
            return;
        }
    }

    TxtRespuesta(valor) {
        const ans = {
            respuesta: "Utilice las librerías de compatibilidad mencionadas; Existen librerias cdn que ayudan a esta compatibilidad. Pero en el caso de babel podemos defibnir para que navegadores que remos la compatibilidad. Comando 'npx browserslist', esto es por babel-preset. Aunque siempore es mejor probar directamente en el navegador.."
        }
        if(valor === "respuesta"){
            document.getElementById('Test3Answer1').innerHTML = ans.respuesta;     
            return;
        }
    }

    Pregunta1(){
        this.TxtPregunta('enunciado');
        this.TxtRespuesta('respuesta')
        let promise = new Promise((resolve, reject) => {
            setTimeout(function () {
                if (Math.round(Math.random()) === 1) {
                    resolve("Success!");
                } else {
                    reject("Fail!");
                }
            }, 1000);
        });
        
        promise
            .then((successMessage) => {
                console.log("Yes! " + successMessage);
            })
            .catch((failMessage) => {
                console.log("No! " + failMessage);
            });

    }

    
    reset(){
        document.getElementById('txtTest3').innerHTML = '';    
        document.getElementById('Test3Answer1').innerHTML = '';     
    }
}
