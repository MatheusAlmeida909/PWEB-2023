

function calculate(idCalc) {

    var num1, num2, result, extraResult;

    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);

    switch (idCalc){
        case "add":
            result = num1 + num2;

            break;

        case "subtract":
            result = num1 - num2;

            break;

        case "multiply":
            result = num1 * num2;

            break;
        
        case "divide":
            result = num1 / num2;
            
            break;

        case "square":
            result = num1 * num1;
           
            if (num1 != null || num1 <= 0) {
                document.getElementById("answer").value = result;    
            } else {
                alert("Insira um numero válido para o calculo de potência (números maiores que 0 e não negativos).");
            }
            break;
    
        default:
            break;
    }

    document.getElementById("answer").value = result;
}