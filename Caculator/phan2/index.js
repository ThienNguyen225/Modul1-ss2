function setInput(number)
{
    document.getElementById('input').value += number;
}

function setResult(){
    let inputValue = document.getElementById('input').value;
    let result = eval(inputValue);
    
    document.getElementById('input').value = result;

}