"use strict";
var errorStatus = /** @class */ (function () {
    function errorStatus() {
    }
    return errorStatus;
}());
var successStatus = /** @class */ (function () {
    function successStatus() {
    }
    return successStatus;
}());
function get(status) {
    switch (status.type) {
        case 'Error':
            console.log('Error in application LVD-System.');
            break;
        case 'Success':
            console.log(status.response);
            break;
    }
    console.log(status.code);
}
var game = {
    title: 'WZ',
    success: true
};
var artist = {
    name: 'Luz Valdez',
    success: false,
    error: '404'
};
/* Como funcionan los toit wards: identifica el tipo de dato que se esta trabajando o recibiendo*/
function add(a, b) {
    // toit wards
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    else {
        return a.toFixed() + b;
    }
}
function dowloadData(data) {
    if ('tittle' in data) {
        console.log(data);
    }
    if ('tittle' in data) {
        console.log(data);
    }
}
dowloadData(game);
dowloadData(artist);
