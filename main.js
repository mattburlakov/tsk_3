var weight = {
    0: 1,
    4: 1,
    6: 1,
    9: 1,
    8: 2
};
function splitToDigit(n) {
    return (n + '').split('').map(function (i) { return Number(i); });
}
function insertionSort(arr, arrN) {
    var _a, _b;
    for (var i = 1; i < arr.length; i++) {
        for (var j = i - 1; j > -1; j--) {
            if (arr[j + 1] < arr[j]) {
                _a = [arr[j], arr[j + 1]], arr[j + 1] = _a[0], arr[j] = _a[1];
                _b = [arrN[j], arrN[j + 1]], arrN[j + 1] = _b[0], arrN[j] = _b[1];
            }
        }
    }
    ;
    return arrN;
}
function check(n) {
    var locWeight = 0;
    var length = n.length;
    for (var i = 0; i < length; i++) {
        if (n[i] in weight) {
            locWeight += weight[n[i]];
        }
    }
    return locWeight;
}
function weightSort(arr) {
    var length = arr.length;
    var weights = new Array(0);
    for (var i = 0; i < length; i++) {
        weights.push(check(splitToDigit(arr[i])) * arr[i]);
    }
    console.log(insertionSort(weights, arr));
}
weightSort([1, 4, 20, 24, 44, 22]);
