var count = 0;
var counterElement = document.getElementById('counter');

function increment() {
    count++;
    counterElement.innerHTML = count;
}

function decrement() {
    if (count > 0) {
        count--;
        counterElement.innerHTML = count;
    }
}

function calculPrix(){
    var prix = document.getElementById('prix').innerHTML;
    var total = (prix * count).toFixed(2);
    return total;

}

function mettreJourPrix(){
    var bouton = document.getElementById('button');
    var index = bouton.innerHTML.length - 1;
    while (index >= 0 && bouton.innerHTML[index] !== ":") {
        index--;
    }
    index = index + 1;
    bouton.innerHTML = (bouton.innerHTML.substring(0, index) + calculPrix() + " د.م.");
}