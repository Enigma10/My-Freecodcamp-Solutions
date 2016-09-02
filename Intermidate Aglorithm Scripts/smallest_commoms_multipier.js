function smallestCommons(array) {
    var range = createRange(array);

    return range.reduce(function(a, b) {
        return lcm(a, b);
    });

    function lcm(a, b) {
        return (Math.abs(a * b) / gcd(a, b));
    }

    function gcd(a, b) {
        if ( ! b) {  
        return a;  
    }  
  
    return gcd(b, a % b);  
     //   return a;
    }

    function createRange(array) {
        var range = [];
        var highest = array.reduce(function(a, b) {
            return Math.max(a, b);
        });
        var lowest = array.reduce(function(a, b) {
            return Math.min(a, b);
        });
        for (var i = lowest; i <= highest; i++) {
            range.push(i);
        }
        return range;
    }
}

smallestCommons([1,5]);
