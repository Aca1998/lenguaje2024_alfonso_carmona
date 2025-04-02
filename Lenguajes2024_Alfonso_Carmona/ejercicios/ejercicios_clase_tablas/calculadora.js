//Añade un evento a un elemento. Document es el elemento raíz. DOMContentLoaded es el evento que se activa al cargar el documento
document.addEventListener('DOMContentLoaded', function() {

    const buttons = document.querySelectorAll('#calculadora td');
    let numero1;
    let numero2;
    let operador;
    
    //forEach es un método que itera por todos los elementos. En este caso todos los botones seleccionados
    buttons.forEach(button => {

        if (button.id !== 'display') {
            button.addEventListener('click', function() {

                console.log(`Botón presionado: ${button.textContent} (ID: ${button.id})`);
                

                const display = document.getElementById('display');
                
                if (button.className != 'number'){
                    if(numero1){
                        numero2 = display.textContent
                        console.log(numero2)
                    }
                    else{
                        numero1 = display.textContent;
                        console.log(numero1)
                    }
                }
                if (button.className != 'number'){
                    display.textContent = '';
                }
                else if (button.id === 'c') {

                    display.textContent = '0';
                } else if (button.id === 'º') {

                    if (display.textContent.length > 1) {
                        display.textContent = display.textContent.slice(0, -1);
                    } else {
                        display.textContent = '0';
                    }
                } else if (display.textContent === '0' && !isNaN(button.textContent)) {

                    display.textContent = button.textContent;
                } else if (button.className = 'number'){

                    display.textContent += button.textContent;
                }

                if(numero1 && numero2){
                    display.textContent = Number(numero1) + Number(numero2);
                }
                
            });
        }
    });
});