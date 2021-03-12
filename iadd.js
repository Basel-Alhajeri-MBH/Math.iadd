// C->MBH()
// made for clear some of asmjs and also for having fun :|
Object.defineProperty(this && this.Math || Math, 'iadd', {
    value: function(stdlib) {
        'use asm';
        'use strict';
        var Math = stdlib.Math;
        var Int32Array = stdlib.Int32Array;
        var safe_mbh_addion_functions = [
            function iadd(x, y) {
                var ints = new Int32Array(2);
                ints[0] = +x;
                ints[1] = +y;
                return (ints[0] + ints[1]) | 0;
            }, function iadd(x, y) {
                x = x | 0;
                y = y & 0xFFFFFFFF;
                return (x + y) | 0;
            }, function iadd(x, y) {
                return (x >> 16 + y >> 16) & 0xFFFF << 16 | ((x + y) & 0xFFFF);
            }, function iadd(x, y) {
                var x16 = x & 0xFFFF;
                var y16 = y & 0xFFFF;
                var res16 = (x16 + y16) & 0x1FFFF,
                    res;
                x = (x >> 16) & 0xFFFF;
                y = (y >> 16) & 0xFFFF;
                res = (x + y) & 0x1FFFF;
                return (res << 16 | res16) | 0;
            }
        ];
        return safe_mbh_addion_functions[(Math.random() * safe_mbh_addion_functions.length) >>> 0];
    }(this && this.Math && this || {
        Math: Math , // namespace
        Int32Array: Int32Array
    })
});
