

function calculate(idCalc) {

    var num1, num2, result, extraResult;

    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);

    switch (idCalc){
        case "add":
            result = num1 + num2;

            document.getElementById("answer").value = result;
            break;

        case "subtract":
            result = num1 - num2;

            document.getElementById("answer").value = result;
            break;

        case "multiply":
            result = num1 * num2;

            document.getElementById("answer").value = result;
            break;
        
        case "divide":
            result = num1 / num2;

            document.getElementById("answer").value = result;
            break;

        case "square":
            result = num1 * num1;
            extraResult = num2 * num2;
            
            if (num2 != null || num2 <= 0) {
                document.getElementById("answer").value = result;    
            } else {
                if (num1 != null || num1 <= 0) {
                    document.getElementById("answer").value = extraResult; //this line isn't working properly alongside line 45 "The specified value "NaN" cannot be parsed, or is out of range."
                } else {
                    document.getElementById("answer").value = result ;
                } 
            }
            break;
    
        default:
            break;
    }
}