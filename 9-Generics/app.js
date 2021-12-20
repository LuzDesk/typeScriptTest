"use strict";
//
var Pila = /** @class */ (function () {
    function Pila(_tamanio) {
        this.tamanio = 150;
        this.indexAct = 0;
        this.numElements = 0;
        if (_tamanio) {
            if (_tamanio > 0) {
                this.arrays = new Array(_tamanio);
            }
            else {
                throw Error('Not data in Array');
            }
        }
        else {
            this.arrays = new Array(this.tamanio);
        }
    }
    Pila.prototype.apilar = function (element) {
        if (this.numElements === this.arrays.length) {
            throw Error('Array is full.');
        }
        else {
            this.arrays[this.indexAct] = element;
            this.indexAct++;
            this.numElements++;
        }
    };
    Pila.prototype.desapilar = function () {
        if (this.numElements === 0) {
            throw Error('Array is empty.');
        }
        else {
            this.indexAct--;
            var elements = this.arrays[this.indexAct];
            this.numElements--;
            return elements;
        }
    };
    return Pila;
}());
var pila = new Pila();
var pila2 = new Pila(20);
// see size Array
console.log(pila.arrays.length);
console.log(pila2.arrays.length);
pila.apilar(25);
pila.apilar(11);
pila.apilar(87);
var element = pila.desapilar();
console.log(element);
element = pila.desapilar();
console.log(element);
element = pila.desapilar();
console.log(element);
var ClassGeneric = /** @class */ (function () {
    function ClassGeneric() {
    }
    return ClassGeneric;
}());
