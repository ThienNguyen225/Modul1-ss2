function getValueA(){
    let inputValueA = parseFloat(document.getElementById('numberA').value);
    return inputValueA;
}
function getValueB(){
    let inputValueB = parseFloat(document.getElementById('numberB').value);
    return inputValueB;
}
function sum(){
    let result = getValueA() + getValueB();
    //console.log(result);
    document.getElementById('ketqua').innerHTML = result;
}

function subtraction(){
    let result = getValueA() - getValueB();
    document.getElementById('ketqua').innerHTML = result;
}

function multip(){
    let result = getValueA() * getValueB();
    document.getElementById('ketqua').innerHTML = result;
}

function Division(){
    let result = getValueA() / getValueB();
    document.getElementById('ketqua').innerHTML = result;
}