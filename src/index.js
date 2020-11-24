import _ from 'lodash';
import { Test1 }  from './module/test1';
import { Test2 } from './module/test2';
import { Test3 } from './module/test3';

const rgb = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF"
    }

    const wb = {
        white: "#FFFFFF",
        black: "#000000"
    };


const ex1 = new Test1(rgb,wb);
const ex2 = new Test2();
const ex3 = new Test3();

//EXAMEN 1//
document.querySelector('#Examen11').addEventListener('click',() => {
    ex1.Pregunta1();
})

document.querySelector('#Examen12').addEventListener('click',() => {
    ex1.Pregunta2();
})

document.querySelector('#Examen13').addEventListener('click',() => {
    ex1.Pregunta3();
})

document.querySelector('#Limpiar1').addEventListener('click',() => {
    ex1.reset();
})


//EXAMEN DOS//
document.querySelector('#Examen21').addEventListener('click',() => {
    ex2.Pregunta1();
})

document.querySelector('#Examen22').addEventListener('click',() => {
    ex2.Pregunta2();
})

document.querySelector('#Limpiar2').addEventListener('click',() => {
    ex2.reset();
})

//EXAMEN 3//
document.querySelector('#Examen31').addEventListener('click',() => {
    ex3.Pregunta1();
})

document.querySelector('#Limpiar3').addEventListener('click',() => {
    ex3.reset();
})
    

    




 




