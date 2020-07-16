/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    var result = [];
    for(var i = 0, len = T.length; i < len; i++) {
        if (i == len - 1) {
            result.push(0);
        } else {
            var currValue = T[i];
            var waitDay = 0;
            inner: for (var j = i + 1, len = T.length; j < len; j++) {
                if (T[j] > currValue) {
                    waitDay = j - i;
                    break inner;
                }
            }
            result.push(waitDay)
        }
    }
    return result;
};

// 考虑边界
var dailyTemperatures = function(T) {
    var result = [];
    for(var i = 0, len = T.length; i < len; i++) {
        var currValue = T[i];
        if (currValue === 100) {
            result.push(0); 
        } else if (i == len - 1) {
            result.push(0);
        } else {
            var waitDay = 0;
            inner: for (var j = i + 1, len = T.length; j < len; j++) {
                if (T[j] > currValue) {
                    waitDay = j - i;
                    break inner;
                }
            }
            result.push(waitDay)
        }
    }
    return result;
};

// new Array & fill
var dailyTemperatures = function(T) {
    const res = new Array(T.length).fill(0);
    for (let i = 0; i < T.length; i++) {
        for (let j = i + 1; j < T.length; j++) {
            if (T[j] > T[i]) {
                res[i] = j - i;
                break;
            }  
        }  
    }
    return res;
};
