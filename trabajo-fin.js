
 /* Primer boton*/

const cuerpo1 = document.querySelector(".item2");
function cambiaColor(){
        cuerpo1.style.color= "black";
} 


const myButton = document.getElementById('myButton')

myButton.addEventListener('click', function() {
        myButton.disabled = true;
        myButton.style.opacity = 0;
        myButton.textContent = ' ';

        setTimeout(function() {
                myButton.textContent = 'click';
                myButton.style.opacity = 0;
                myButton.disabled = false;
        },     5000);


        });




const backCuerpo1 = document.querySelector(".item2");
function backCambiacolor(){
        backCuerpo1.style.color= "#d6f5d6";
} 
        
        
const myButton11 = document.getElementById('myButton11')
        
myButton11.addEventListener('click', function() {
        myButton11.disabled = true;
        myButton11.style.opacity = 0;
        myButton11.textContent = ' ';

        setTimeout(function() {
                myButton11.textContent = 'click';
                myButton11.style.opacity = 0;
                myButton11.disabled = false;
        },     5000);


        });



/*Segundo boton*/


const cuerpo2  = document.querySelector(".item3");
function cambiafondo(){
        cuerpo2.style.color= "black";
} 


const myButton2 = document.getElementById('myButton2')

myButton2.addEventListener('click', function() {
        myButton2.disabled = true;
        myButton2.style.opacity = 0;
        myButton2.textContent = ' ';

        setTimeout(function() {
                myButton2.textContent = 'click';
                myButton2.style.opacity = 0;
                myButton2.disabled = false;
        },     5000);


        });



const backCuerpo2  = document.querySelector(".item3");
function backCambiafondo(){
      backCuerpo2.style.color= "#ffe6e6";
        } 
        
        
const myButton21 = document.getElementById('myButton21')
        
myButton21.addEventListener('click', function() {
        myButton21.disabled = true;
        myButton21.style.opacity = 0;
        myButton21.textContent = ' ';
        
        setTimeout(function() {
        myButton21.textContent = 'click';
        myButton21.style.opacity = 0;
        myButton21.disabled = false;
        },     5000);
        
        
 });
        




/* Tercer boton*/

const cuerpo3 = document.querySelector(".item4");
    function cambiasalo(){
            cuerpo3.style.color= 'black';
        } 

const myButton3 = document.getElementById('myButton3')

myButton3.addEventListener('click', function() {
        myButton3.disabled = true;
        myButton3.style.opacity = 0;
        myButton3.textContent = ' ';

        setTimeout(function() {
                myButton3.textContent = 'click';
                myButton3.style.opacity = 0;
                myButton3.disabled = false;
        },     5000);


        });



const backCuerpo3 = document.querySelector(".item4");
        function backCambiasalo(){
            backCuerpo3.style.color= '#f2e6ff';
        } 

const myButton31 = document.getElementById('myButton31')


myButton31.addEventListener('click', function() {
        myButton31.disabled = true;
        myButton31.style.opacity = 0;
        myButton31.textContent = ' ';
        myButton31.style.color = '#f2e6ff';

        setTimeout(function() {
                myButton31.textContent = 'click';
                myButton31.style.opacity = 4;
                myButton31.disabled = false;
                myButton.color = 'black'
        },     5000);
        
        
                });

