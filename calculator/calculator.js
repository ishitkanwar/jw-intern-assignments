const operators = ['+', '-', '*', '/', '^'];
const operatorPrecedence = {
    '^': 3,
    '*': 2,
    '/': 2,
    '-': 1,
    '+': 1,
    '(': 0, // To make sure that ( bracket is not disturbed when it is present in the operatorStack.
};


function displayExpression(val)
{
    document.getElementById("result").value+=val
}

function solve()
{
    let expression = document.getElementById("result").value
    document.getElementById("result").value = expressionCalculator(expression)
}

function clearExpression()
{
    document.getElementById("result").value = ""
}

function expressionCalculator(expression) {
    let operatorStack = [];
    let outputQueue = [];
    for(let i=0; i < expression.length; i++) {
        if (operators.indexOf(expression[i]) === -1){
            if (expression[i] === '(') {
                operatorStack.push(expression[i]);
            } else if (expression[i] === ')') {
                while (true) {
                    let topOfStack = operatorStack.pop();
                    if (topOfStack === '(') {
                        break
                    }
                    outputQueue.push(topOfStack)
                }
            } else {
                outputQueue.push(expression[i]);
            }
        } else {
            if (operatorStack.length === 0){
                operatorStack.push(expression[i]);
            }
            else {
                let topOfStack = operatorStack.pop()
                if (operatorPrecedence[topOfStack] === operatorPrecedence[expression[i]]) {
                    if (topOfStack === '^') { // ^ is evaluated right-to-left.
                        operatorStack.push(topOfStack);
                        operatorStack.push(expression[i]);    
                    } else {
                        outputQueue.push(topOfStack);
                        operatorStack.push(expression[i]);
                    }
                } else if (operatorPrecedence[topOfStack] < operatorPrecedence[expression[i]]) { 
                    operatorStack.push(topOfStack);
                    operatorStack.push(expression[i]);
                } else {
                    while (true) {
                        outputQueue.push(topOfStack);
                        if (operatorStack.length === 0) {
                            operatorStack.push(expression[i]);
                            break;
                        }
                        topOfStack = operatorStack.pop()
                        if (operatorPrecedence[topOfStack] === operatorPrecedence[expression[i]]) {
                            outputQueue.push(topOfStack);
                            operatorStack.push(expression[i]);
                            break;
                        }    
                    }
                }
            }
        }
    }
    while (operatorStack.length !== 0) {
        let topOfStack = operatorStack.pop()
        outputQueue.push(topOfStack)
    }
    outputQueue.reverse();
    evaluationStack = [];
    while (outputQueue.length !== 0) {
        topOfStack = outputQueue.pop()
        if (operators.indexOf(topOfStack) === -1) {
            evaluationStack.push(topOfStack)
        }
        else {
            let y = Number(evaluationStack.pop())
            let x = Number(evaluationStack.pop())
            if (topOfStack === '+') {
                let result = x + y;
                evaluationStack.push(result)
            } else if (topOfStack === '-') {
                let result = x - y;
                evaluationStack.push(result)
            } else if (topOfStack === '*') {
                let result = x * y;
                evaluationStack.push(result)
            } else if (topOfStack === '/') {
                let result = x / y;
                evaluationStack.push(result)
            } else {
                let result = x ** y;
                evaluationStack.push(result)
            }
        }
    } 
    return evaluationStack.pop()
}

function circleArea(radius) {
    let area = (22/7)*(radius**2)
    return area
}

function squareArea(side) {
    let area = side**2
    return area
}

function rectangleArea(length, breadth) {
    let area = length*breadth
    return area
}