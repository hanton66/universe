//
// Some genral Math funktions for easier typing
//
// Square-Root
function sqrt(x) {
    var x;
    var y;
    y = Math.sqrt(x);
    return y;
}

//
// Power-Function
function power(x, z) {
    var x;
    var z;
    var y;
    y = Math.pow(x, z);
    return y;
}

//
// Exp-Funktion
function exp(x) {
    var x;
    var y;
    y = Math.exp(x);
    return y;
}

//
// Sinus-Hyberbolicus-Function
function sinh(x) {
    var x;
    var y;
    y = 0.5 * (exp(x) - exp(-x));
    return y;
}

//
// Nummeric Differential
function diff(fofr, r) {
    var fofr;
    var r;
    var dr = 1e-5;
    r = r - dr;
    var fofrm = eval(fofr);
    r = r + dr + dr;
    var fofrp = eval(fofr);
    dfdr = 0.5 * (fofrp - fofrm) / dr;
    return dfdr;
}

//
// Nummeric Second Derivation
function diff2(fofr, r) {
    var fofr;
    var r;
    var dr = 1e-5;
    r = r - dr;
    var fofrm = eval(fofr);
    r = r + dr;
    var fofr0 = eval(fofr);
    r = r + dr;
    var fofrp = eval(fofr);
    dfdr = (fofrp + fofrm - 2 * fofr0) / (dr * dr);
    return dfdr;
}

//
// Formatting Number
function form(x, z) {
    var x;
    var z;
    var y;
    x = Math.round(x * power(10, z));
    y = x / power(10, z);
    return y;
}