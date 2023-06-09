"use strict"

function oneSidePyramidMaker(num){
    for(let i = 1 ; i <= num ; i++){
        for(let j = 1 ; j <= (i * 2) - 1 ; j++){
            process.stdout.write("*");
        }
        console.log();
    }
}

function pyramidMaker(num) {
    const middle = Math.ceil(((num * 2)-1 )/ 2)
    const temp = [middle]
    for(let i = 1 ; i <= num ; i++){
        for (let j = 1 ; j <= (num * 2)-1 ; j++){
            if (temp.includes(j)){
                process.stdout.write("*");
            }else{
                process.stdout.write("-");
            }
        }
        console.log();
        temp.push(middle + i );
        temp.push(middle - i );
    }
}

oneSidePyramidMaker(5); // odd
oneSidePyramidMaker(6); // even

pyramidMaker(5); // odd
pyramidMaker(6); // even
