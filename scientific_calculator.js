var expression = (() => {
    var dis = document.getElementById('dis');
    var value = "0";
    var memoryValue = [];


    var setExpresion = function (a) {
        if (value == "0") { value = ""; }
        value += a;
        dis.value = value;
    }

    var addPI = function () {
        expression.updateExpression1(Math.PI.toFixed(6));
        dis.value = expression.getValue();
    }
    var getResult = function () {
        x = expression.getValue();
        if (x.includes("|-")) {
            x = x.slice(2, -1)
            final_answer = x;
        }
        else if (x) {
            final_answer = eval(x);
        }
        else
            final_answer = "0";
        expression.setValue(final_answer.toString());
        dis.value = expression.getValue();
    }
    var clear_display = function () {
        expression.setValue(0);
        setExpresion(0);
    }

    var clear_last_digit = function () {
        e = expression.getValue();
        e = e.slice(0, e.length - 1);
        if (!e.length) { expression.setValue(0); }
        else expression.setValue(e);
        dis.value = expression.getValue();
    }
    var factorial = function () {
        number = Number(value);
        factofNumber = 1;
        for (i = 2; i <= number; i++)
            factofNumber = factofNumber * i;
        expression.setValue(factofNumber);
        document.getElementById("dis").value = factofNumber.toString();
    }

    var getRandomValue = () => {
        randValue = Math.random();
        e = expression.getValue();
        if (e.length) {
            //window.alert(e.length);
            setExpresion(randValue);
        }
        e = randValue.toString();
        expression.setValue(e);
        document.getElementById("dis").value = expression.getValue();
    }

    var e_raised_to_x = function () {
        lastDigit = value.slice(-1);
        final_answer = Math.pow(Math.PI.toFixed(3), lastDigit);
        expression.setValue(value.slice(0, -1));
        setExpresion(final_answer);
    }
    var cube = function () {
        lastDigit = value.slice(-1);
        final_answer = Math.pow(lastDigit, 3);
        expression.setValue(value.slice(0, -1));
        setExpresion(final_answer);
    }
    var setFloorValue = (a) => {
        value = expression.getValue();
        if (a == "fd")
            value = Math.floor(value);
        else
            value = parseInt(Number(value) + 1);
        expression.setValue(value);
        document.getElementById("dis").value = expression.getValue();

    }

    var changeFunction = function () {
        document.getElementById("x3").innerText = "x3";
        document.getElementById("x3").value = "x3";

        document.getElementById("cbrt").innerText = "3√x";
        document.getElementById("cbrt").value = "Math.cbrt(";

        document.getElementById("yRootx").innerText = "y√x";
        document.getElementById("yRootx").value = "Math.pow(";

        document.getElementById("2x").innerText = "2^x";
        document.getElementById("2x").value = "Math.pow(2,";

        document.getElementById("logyx").innerText = "logyX";

        document.getElementById("ex").innerText = "eX";
        document.getElementById("ex").value = "ex";
    }

    var EF = () => {
        v = Number(expression.getValue());
        v = v.toExponential();
        expression.setValue(0);
        setExpresion(v);
    }

    var memoryFunction = (id) => {
        switch (id) {
            case "MS":
                memoryValue.unshift(Number(value));
                break;
            case "MC":
                memoryValue = [];
                break;
            case "M+":
                if (memoryValue[0])
                    memoryValue[0] += Number(value);
                break;
            case "M-":
                if (memoryValue[0])
                    memoryValue[0] -= Number(value);
                break;
            case "MR":
                console.log(memoryValue)
                if (memoryValue[0])
                    lastValue = memoryValue[0];
                    setExpresion(lastValue);
                break;
        }
        document.getElementById("memory").innerHTML = (memoryValue.length === 0 ? "Empty Memory (Use <b>MS</b> to store memory)" : memoryValue);
    }


    var mathFunction = (func) => {
        degrees = value.slice(-2);
        value = value.slice(0, value.length - 2);
        console.log("degree is " + degrees);
        var radians = (degrees * Math.PI) / 180;
        var final_answer = 0;
        switch (func) {
            case "sin":
                final_answer = Math.sin(radians);
                break;
            case "cos":
                final_answer = Math.cos(radians);
                break;
            case "tan":
                final_answer = Math.tan(radians);
                break;
            case "cosec":
                final_answer = 1 / Math.sin(radians);
                break;
            case "sec":
                final_answer = 1 / Math.cos(radians);
                break;
            case "cot":
                final_answer = 1 / Math.tan(radians);
                break;
        }
        setExpresion(final_answer.toFixed(2));
    }


    return {
        updateExpression1: function (a) {
            console.log("in private");
            switch (a) {
                case "Math.PI":
                    addPI();
                    break;
                case "=":
                    getResult();
                    break;
                case "clear":
                    clear_display();
                    break;
                case "CL":
                    clear_last_digit();
                    break;
                case "!":
                    factorial();
                    break;
                case "randValue":
                    getRandomValue();
                    break;
                case "ex":
                    e_raised_to_x();
                    break;
                case "x3":
                    cube();
                    break;
                case "fu":
                    setFloorValue(a);
                    break;
                case "fd":
                    setFloorValue(a);
                    break;
                default:
                    setExpresion(a);
            }
        },
        setValue: function (v) {
            value = v;
        },
        getValue() {
            return value;
        },
        changeFunction: changeFunction,
        memoryFunction: memoryFunction,
        mathFunction: mathFunction,
        EF: EF
    };
}
)();



expression.setValue(0);

function updateExpresion(a) {
    expression.updateExpression1(a);
}

function updateFunction() {
    expression.changeFunction();
}

function memoryFunction1(id) {
    expression.memoryFunction(id);
}
function calculateTrigo(func) {
    expression.mathFunction(func);
}
function setEF() {
    expression.EF();
}

function inputBetweenExp() {
    displayValue = document.getElementById("dis").value;
    expression.setValue(displayValue);
}


