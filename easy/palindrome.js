/**
 * 字符串反转解法
 * @param {number} x
 * @return {boolean}
 */
var isPalindromeByString = function(x) {
    if (x < 0) {
        return false;
    } else {
        var strNum = String(x);
        if (strNum.split('').reverse().join('') === strNum) {
            return true;
        }
        return false;
    }
};

/**
 * 数字反转解法
 * @param {number} x
 * @return {boolean}
 */
var isPalindromeByNumber = function(x) {
    var reverseNumList = [];
    var tempNum = x;
    while(tempNum > 0) {
        var lastNum = tempNum % 10;
        reverseNumList.push(lastNum);
        tempNum = Math.floor(tempNum / 10);
    }
    var reversedValue = 0;
    for (var i = 0, len = reverseNumList.length; i < len; i++) {
        reversedValue += reverseNumList[i] * Math.pow(10, len - 1 - i)
    }
    return reversedValue === x;
};
