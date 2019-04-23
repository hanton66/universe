//
// Some genral Math funktions for easier typing
//
// Square-Root
function sqrt(x) {
    var y;
    y = Math.sqrt(x);
    return y;
}

//
// Power-Function
function power(x, z) {
    var y;
    y = Math.pow(x, z);
    return y;
}

//
// Exp-Funktion
function exp(x) {
    var y;
    y = Math.exp(x);
    return y;
}

//
// Sinus-Hyberbolicus-Function
function sinh(x) {
    var y;
    y = 0.5 * (exp(x) - exp(-x));
    return y;
}

//
// Nummeric Differential
function diff(fofr, r, ngo, cmulti) {
    var dfdr = new Array(ngo);
    var dr = 0;
    for (igo = 1; igo < ngo; igo++) {
        dr = r[igo+1] - r[igo-1];
        dfdr[igo] = (fofr[igo+1] - fofr[igo-1])/dr*cmulti;
    }
    dfdr[0] = 2*dfdr[1]-dfdr[2];
    dfdr[ngo] = 2*dfdr[ngo-1]-dfdr[ngo-2];
    return dfdr;
}

//
// Nummeric Second Derivation
function diff2(fofr, r, ngo, cmulti) {
    var d2fdr2 = new Array(ngo);
    var dfdr = new Array(ngo);    
    dfdr = diff(fofr, r, ngo, cmulti);
    d2fdr2 = diff(dfdr, r, ngo, cmulti);
    return d2fdr2;
}

function chkCross(fofr,r,ngo,refval) {
    var rcross = 0.0;
    var dr = 0.0;
    var dall = 0.0;
    var dfofr = 0.0;
    for (igo = 0; igo < ngo; igo++) {
        if (fofr[igo] < refval) {
            if (fofr[igo+1] > refval) {
                var dr = r[igo+1] - r[igo]; 
                var dall = fofr[igo+1] - fofr[igo];
                var dfofr = refval - fofr[igo]; 
                rcross = r[igo] + dr*dfofr/dall;
            }
        }
        if (fofr[igo] > refval) {
            if (fofr[igo+1] < refval) {
                var dr = r[igo+1] - r[igo]; 
                var dall = fofr[igo+1] - fofr[igo];
                var dfofr = refval - fofr[igo]; 
                rcross = r[igo] + dr*dfofr/dall;
            }
        }     
        if (fofr[igo] == refval) {
            rcross = r[igo];
        }   
    }
    return rcross;

}

//
// Formatting Number
function form(x, z) {
    var y;
    x = Math.round(x * power(10, z));
    y = x / power(10, z);
    return y;
}