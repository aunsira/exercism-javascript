var Hamming = function() {};

// Hamming.prototype.compute = function(a, b) {
//   checkLengthStrands(a, b);
//   count = 0;
//   a = Array.from(a);
//   b = Array.from(b);
//   Array.from(a).forEach(function(val, i){
//     if (a[i] != b[i]) count++;
//   });
//   return count;
// };

Hamming.prototype = {
  compute: function(a, b) {
    checkLengthStrands(a, b);
    count = 0;
    a = Array.from(a);
    b = Array.from(b);
    Array.from(a).forEach(function(val, i){ if (a[i] != b[i]) count++; });
    return count;
  }
};

function checkLengthStrands(a,b) {
  if (a.length !== b.length) throw new Error('DNA strands must be of equal length.');
}

module.exports = Hamming;
