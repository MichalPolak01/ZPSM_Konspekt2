const _ = require('lodash');

const average = (arr) => {
    console.log("Tablica [" + arr + "]");
    console.log("Srednia: "+ _.mean(arr));
    console.log("Wartość minimalna: " + _.min(arr));
    console.log("Wartość maksymalna: " + _.max(arr));
}

average([1,2,2,3,3,4,9,8,5,4,5,2,1]);