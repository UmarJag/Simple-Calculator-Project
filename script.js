//Calculator Program

const display = document.getElementById('display');


    function appendNumber(input){
        display.value += input;
    }


    function calculate(){
        try{
            display.value = eval(display.value)
        }catch(error){
            display.value = "Error"
        };
    }

    function clearDisplay(){
        display.value = '';
    };