function TwoSum(nums, target) {

    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let num1 = nums[i]; /* = 2 */
        let num2 = target - num1; /* 4 - 2 = 2 */
        if (map.has(num2)) {
            return [map.get(num2), i]
        }
        map.set(num1, i)
    }
}

function isPalindrome(x) {
    let g = x.toString();
    var j = g.length - 1
    var i = 0;
    var resolt;
    while (i < j) {
        if (g[i] == g[j]) {
            resolt = true
        }
        else {
            resolt = false
        }
        i++
        j--
    }
    return resolt
}

function longestCommonPrefix(Arr = []) {
    var i = 0
    var j = 0
    var Resolt = 0

    while (i < 4) {
        while (j < 3) {
            if (Arr[i][j] === Arr[i + 1][j]) {
                Resolt += 1
            } else {
                Resolt;
            }
            j++
        }
        i++
    }
    return Resolt
}






