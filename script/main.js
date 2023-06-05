const redCar = document.querySelector('#autoRojo');
const blueCar = document.querySelector('#autoAzul');
const contenedorPista = document.querySelector('.imagenesAutos');

var acumuladorLeftRedCar= 0;
var acumuladorLeftBlueCar= 0;

window.addEventListener("keyup", function(event) {
    if(event.code == 'Space'){
        acumuladorLeftRedCar+= 11;
        redCar.style.marginLeft = acumuladorLeftRedCar + 'px';
        checkPosition();
    }if(event.code == 'ArrowRight'){
        acumuladorLeftBlueCar+= 11;
        blueCar.style.marginLeft = acumuladorLeftBlueCar + 'px';
        checkPosition();
    }
    
});

function checkPosition(){
    if (redCar.style.marginLeft == '935px'){
        const finishContainer = document.querySelector('.finish');
        finishContainer.style.display = 'flex';
        const ganador = document.createElement('h4');
        ganador.classList.add('textRed');
        ganador.textContent = "PLAYER 1 'RED' WINS"
        finishContainer.appendChild(ganador);   
        acumuladorLeftRedCar= null;
        acumuladorLeftBlueCar= null;
    } 
    if (blueCar.style.marginLeft == '935px'){
        const finishContainer = document.querySelector('.finish');
        finishContainer.style.display = 'flex';
        const ganador = document.createElement('h4');
        ganador.classList.add('textBlue');
        ganador.textContent = "PLAYER 2 'BLUE' WINS"
        finishContainer.appendChild(ganador);  
        acumuladorLeftBlueCar= null;
        acumuladorLeftRedCar= null;
    }
}
