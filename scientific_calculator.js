var expression = (() => {
    var value = "0";

    var setExpresion = function (a) {
        if (value == "0") { value = ""; }
        value += a;
        document.getElementById('dis').value = value;
    }
    var addPI = function () {
        expression.updateExpression1(Math.PI.toFixed(6));
        document.getElementById('dis').value = expression.getValue();
    }
    var getResult = function () {
        x = expression.getValue();
        if (x) {
            final_answer = eval(x);
        }
        else
            final_answer = "0";
        expression.setValue(final_answer.toString());
        document.getElementById('dis').value = expression.getValue();
    }
    var clear_display = function () {
        expression.setValue(0);
        document.getElementById('dis').value = expression.getValue();
    }

    var clear_last_digit = function () {
        e = expression.getValue();
        e = e.slice(0, e.length - 1);
        if (!e.length) { expression.setValue(0); }
        else expression.setValue(e);
        document.getElementById('dis').value = expression.getValue();
    }
    var factorial = function () {
        expression = expression.slice(0, expression.length);
        number = Number(expression);
        factofNumber = 1;
        for (i = 2; i <= number; i++)
            factofNumber = factofNumber * i;
        document.getElementById("dis").value = factofNumber.toString();
    }


    return {
        updateExpression1: function (a) {
            console.log("in private");
            if (a == "Math.PI") {
                addPI();
            }
            else if (a == "=") {
                getResult();
            }
            else if (a == "clear") {
                clear_display();
            }
            else if (a == "CL") {
                clear_last_digit();
            }
            else if (a == "!") {
                factorial();
            }
            else
                setExpresion(a);
        },
        setValue: function (v) {
            value = v;
        },
        getValue() {
            return value;
        }
    };
}
)();



expression.setValue(0);

function updateExpresion(a) {
    expression.updateExpression1(a);
}

function inputBetweenExp() {
    displayValue = document.getElementById("dis").value;
    expression.setValue(displayValue);
}


