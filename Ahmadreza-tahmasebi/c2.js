"use strict"

function isRgbValueOk(...args){
    for(const arg of args){
        if (!(arg >= 0 && arg<256)){
            return false;
        } 
    }
    return true;
}


function rgbToHex(r, g, b) {
    if(isRgbValueOk(r,g,b)){
        return "error"
    }
    var digitOneTwo = (r.toString(16).length) === 2 ? r.toString(16) : `0${r.toString(16)}`;
    var digitThreeFour = (g.toString(16).length) === 2 ? g.toString(16) : `0${g.toString(16)}`;
    var digitFiveSix = (b.toString(16).length) === 2 ? b.toString(16) : `0${b.toString(16)}`;
    return  digitOneTwo + digitThreeFour + digitFiveSix
}

var hex = rgbToHex(255,0,255);
console.log(hex)
