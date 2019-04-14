
function dotheUni(Hubble, Omega, tuni) { 
// Calculate a Universe Simulation
//
// Some free parameters
var tmesh = 10; // is the Time Mesh-Size of the simulation
//var tuni = 20; // Billion years simulation time space
// var Hubble = 68; // Current Hubble constant in km/s/MPs
var O_m = Omega/100;  // Part of real matter in the universe 
//
// depending variables from free parameter
var O_de =  1- O_m;  // dark mass part
var omega = -1.0; // equation of state factor
var deltat = tuni/tmesh; // is the Time between to simulation points
//
// Some physical parameters
var onebillyears = 1e9;  // in years
var secperyear = 365*24*60*60; // in s
var c = 299792458; // velocity of light in m/s
var G = 6.67408e-11; // gravitational constant in m^3/(kg*s^2)
var pi = 3.1415926; // is pi
// var sig = 5.67e-8 % // W/(m^2*K^4)
// var a = 4*sig/c
var parsec = 3.0857e16; // distane of one Parsec in m
var MPc =parsec*1e6; // distance of one millon Parsec in m
var ly = 9.46073e15; // one lightyear in m
var hbar = 6.626e-34/(2*pi); // Plancks constant in J/s
var hbardens = c^5/hbar/G^2; // Critical PLanck density
var H_0 = Hubble*1000/MPc; // HUbble constant in SI units
//
// Some experimental data - Measured redshift vs. Hubble Constant
var zobs = Array(  7,  9, 12, 17, 18, 20, 20, 27, 28, 35, 35, 38, 40, 40, 42, 45, 47, 48, 59, 68, 78, 99, 88, 90,103,130,136,143,153,175,197);
var Hobs = Array( 69, 69, 69, 83, 75, 75, 73, 77, 89, 82, 83, 83, 95, 77, 87, 93, 81, 97,104, 92,105,125, 90,117,154,168,160,177,140,202,187);
//
// Some html Formating variables
var line = "<HR>"
var text = line


alert("Hubble is set to " + Hubble + "\n" +
      "Mass density is set to " + O_m + "\n" +
      "Simulation time is set to " + tuni + " billion years" + "\n" 
);

var it_all = new Array(tmesh); it_all[0] = 1;
var t_all = new Array(tmesh); t_all[0] = 0;
var asim = new Array(tmesh); asim[0] = 0;
var H_t = new Array(tmesh); H_t[0] = 0;
var Hubble_t = new Array(tmesh); Hubble_t[0] = 0;
var Hdist = new Array(tmesh); Hdist[0] = 0;
var zshift = new Array(tmesh); zshift[0] = 0;
var t_de = 2/(3*H_0*sqrt(O_de));
var dt = deltat;
var lblstr = '["0"';

for (var irun = 1; irun <= tmesh; ++irun)
{ 
    it_all[irun] = it_all[irun-1] + deltat; 
    lblstr = lblstr + ',"' + form(it_all[irun],2)  + '"';
    t_all[irun] = it_all[irun] * onebillyears * secperyear;  
    asim[irun] = power((O_m/O_de),(1/3)) * power(sinh(t_all[irun]/t_de),(2/3));  
    H_t[irun] = H_0*sqrt(O_m * power(asim[irun],-3) + O_de*power(asim[irun],(-3*(1+omega))));
    Hubble_t[irun] = H_t[irun]*MPc/1000;
    zshift[irun] = 1.0 / asim[irun] - 1.0;
    Hdist[irun] = 1.0 / H_t[irun] * c / ly / 1.0e9;

}

lblstr = lblstr + "]";
Hubble_t[0] = Hubble_t[1] + Hubble_t[2];


var clrctx = document.getElementById("asim-expansion").getContext('2d');
clrctx.clearRect(0, 0, clrctx.width, clrctx.height);


var lineChartData = {
    labels : eval(lblstr),
    datasets : [									
        {
            fillColor : "rgba(255, 255, 255, 0)",
            data : eval(Hubble_t)
        }             
    ]   
}
var myLine1 = new Chart(document.getElementById("time-expansion").getContext("2d")).Line(lineChartData);


var lineChartData = {
    labels : eval(lblstr),
    datasets : [									
        {
            fillColor : "rgba(255, 255, 255, 0)",
            data : eval(Hdist)
        }
    ]
    
}
var myLine2 = new Chart(document.getElementById("dist-expansion").getContext("2d")).Line(lineChartData);


var lineChartData = {
    labels : eval(lblstr),
    datasets : [									
        {
            fillColor : "rgba(255, 255, 255, 0)",
            data : eval(asim)
        }
    ]
    
}
var myLine3 = new Chart(document.getElementById("asim-expansion").getContext("2d")).Line(lineChartData);




console.log(it_all);
/** 
text = text + it_all;
text = text + line + irun;
text = text + line + t_all;
text = text + line + zobs;
text = text + line + Hobs;
text = text + line + t_de;
text = text + line + asim;
text = text + line + H_t;
text = text + line + Hubble_t;
text = text + line + zshift;
text = text + line + Htime;
text = text + line + Hdist;
text = text + line + lblstr;
text = text + line + eval(Htime);

document.querySelector('output').innerHTML = text;
*/
}