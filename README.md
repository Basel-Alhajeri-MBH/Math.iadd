# Math.iadd
> `Math.iadd`: is just a method returns the result of the C-like 32-bit addtion *made for fun* of the two parameters see [`Math.imul`](https://wiki.developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul) for multiplication or see another nice easy sample of [WebAssembly](https://github.com/Basel-Alhajeri-MBH/WebAssembly-in-a-single-js-file).
## e.g.
#### By `Math.iadd` method
```javascript
> Math.iadd(0xFFFFFFFF, 1); // 0
0
```
#### By C++
```cpp
#include <iostream>

int iadd(int, int);
int main() {
  std::cout << iadd(0xFFFFFFFF, 1); // 0 
  return 0;
}

int iadd(int a, int b) {
  int sum = a + b;
  return sum;
}
```

