const _ = require('lodash');

const average = (arr) => {
    console.log(_.mean(arr));
}

average([1,2,2,3,3,4,9,8,5,4,5,2,1,]);