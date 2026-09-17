let a = [];

function updateResult(message) {
    document.getElementById("result").innerHTML = message;
}

function push() {
    let element = document.getElementById("inputData").value;

    if (element === "") {
        updateResult("Please enter a number.");
        return;
    }

    element = Number(element);

    a.push(element);

    updateResult(`Array after push: ${a}`);
}

function pop() {

    if (a.length === 0) {
        updateResult("Array is empty.");
        return;
    }

    let op = a.pop();

    updateResult(`Array after pop: ${a} <br> Removed value: ${op}`);
}

function shift() {

    if (a.length === 0) {
        updateResult("Array is empty.");
        return;
    }

    let op = a.shift();

    updateResult(`Array after shift: ${a} <br> Removed value: ${op}`);
}

function unshift() {
    let element = document.getElementById("inputData").value;

    if (element === "") {
        updateResult("Please enter a number.");
        return;
    }

    element = Number(element);

    a.unshift(element);

    updateResult(`Array after unshift: ${a}`);
}