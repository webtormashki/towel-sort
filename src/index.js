
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix) {
        return [];
    }

    var sum = [];
    for (i = 0; i < matrix.length; i++) {
        var array = matrix[i];
        if (i % 2 != 0) {
            array.sort(function(a, b) {
            return b - a;
        });
    }
    sum = sum.concat(array);
  }
  return sum;
}
