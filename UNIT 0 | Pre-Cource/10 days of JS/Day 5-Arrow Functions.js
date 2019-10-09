function modifyArray(nums) {
    var arr = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) { arr.push(nums[i] * 2); }
        if (nums[i] % 2 === 1) { arr.push(nums[i] * 3); }
    }
    return arr;
}
