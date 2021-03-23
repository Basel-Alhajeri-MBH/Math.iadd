# Math.iadd
> `Math.iadd`: is just a method returns the result of the C-like 32-bit addtion *made for fun* of the two parameters see [`Math.imul`](https://wiki.developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul) for multiplication or see another nice easy sample of [WebAssembly](https://github.com/Basel-Alhajeri-MBH/WebAssembly-in-a-single-js-file).
## e.g.
#### By `Math.iadd` method
```javascript
> `Math.iadd(0xFFFFFFFF, 1); // 0
0
```
#### By C++
```cpp
#include <iostream>
int main() {
  int i = 0xFFFFFFFF;
  std::cout << i+1; /* 0 */
  return 0;
}
```

