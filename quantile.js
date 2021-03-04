// translated from python https://github.com/python/cpython/blob/master/Lib/statistics.py#L628
data = [105, 129, 87, 86, 111, 111, 89, 81, 108, 92, 110,
    100, 75, 105, 103, 109, 76, 119, 99, 91, 103, 129,
    106, 101, 84, 111, 74, 87, 86, 103, 103, 106, 86,
    111, 75, 87, 102, 121, 111, 88, 89, 101, 106, 95,
    103, 107, 101, 81, 109, 104];

function quantiles(data, n = 4, method = 'exclusive') {
    if (n < 1) {
        throw("n最小为1")
    }
    data.sort((a, b) => a - b)
    var ld = data.length
    if (ld < 2) {
        throw("至少要有2个数字")
    }
    if (method == 'inclusive') {
        var m = ld -1
        var result = []
        for (let i =1; i<n; i++) {
            var j = Math.floor((i*m)/n)
            var delta = (i*m) % n
            var interpolated = (data[j] * (n - delta) + data[j + 1] * delta) / n
            result.push(interpolated)
        }
        return result
    } else if (method == 'exclusive') {
        var m = ld + 1
        var result = []
        for (let i =1; i<n; i++) {
            var j = Math.floor((i*m)/n)
            j = (j < 1) ? 1 : (j > ld-1) ? ld-1 : j
            var delta = i*m - j*n
            var interpolated = (data[j - 1] * (n - delta) + data[j] * delta) / n
            result.push(interpolated)
        }
        return result
    } else {
        throw("未知方法" + method)
    }
}


console.log(quantiles(data, n=10))
console.log(quantiles(data, n=10, method='inclusive'))