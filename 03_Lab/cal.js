function appendValue(data) {
    var inputData = document.getElementById("inputData")
    if(data=="equal")
    {
        var op = eval(inputData.value)
        inputData.value=op;
        return 1;
    }
    if(data=="clear")
    {
    
        inputData.value=" ";
        return 1;
    }
    inputData.value+=data;
}

function btn9() {
    appendValue(9)
}
function btn8() {
    appendValue(8)
}
function btn7() {
    appendValue(7)
}
function btn6() {
    appendValue(6)
}
function btn5() {
    appendValue(5)
}
function btn4() {
    appendValue(4)
}
function btn3() {
    appendValue(3)
}
function btn2() {
    appendValue(2)
}
function btn1() {
    appendValue(1)
}
function btn0() {
    appendValue(0)
}
function btn00() {
    appendValue(0)
    appendValue(0)
}
function add() {
    appendValue("+")
}
function sub() {
    appendValue("-")
}
function equal() {
    appendValue("equal")
}
function Clear() {
    appendValue("clear")
}

