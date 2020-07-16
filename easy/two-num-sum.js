/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (var i = 0, len = nums.length; i < len; i++) {
        for (var j = i + 1; j < len; j++ ) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

// 提前把差值算出来，减少算术运算
var twoSum = function(nums, target) {
    for (var i = 0, len = nums.length; i < len; i++) {
        var diff = target - nums[i]
        for (var j = i + 1; j < len; j++ ) {
            if (nums[j] === diff) {
                return [i, j];
            }
        }
    }
};

// 少一层遍历，利用临时数组，值与索引互换
var twoSum = function(nums, target) {
    var tmp = [];
    for (var i = 0, len = nums.length; i < len; i++) {
        var diff = target - nums[i]
        if (tmp[diff] !== undefined) {
            return [tmp[diff], i]
        }
        tmp[nums[i]] = i;
    }
};

// map查询效率更高
var twoSum = function(nums, target) {
    var map = new Map();
    for (var i = 0, len = nums.length; i < len; i++) {
        var diff = target - nums[i]
        if (map.has(diff)) {
            return [map.get(diff), i]
        }
        map.set(nums[i], i)
    }
};