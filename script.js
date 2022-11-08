var rangeInput = document.getElementById("theme");
var style = document.getElementById('style')

rangeInput.addEventListener('mouseup', function() {
    if (this.value >= 0 && this.value < 49) {
        style.setAttribute("href", 'theme1.css')
    } else if(this.value >= 50 && this.value <= 99){
        style.setAttribute("href", 'theme2.css')
    } else {
        style.setAttribute("href", 'theme3.css')
    }
});

function clearScreen(){
    document.getElementById('result').value = '';
} 

function display(value) {
    document.getElementById("result").value += value;
}

function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}