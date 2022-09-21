---
'@belgattitude/http-exception': minor
---

Add HttpException json serializer.

Two new methods `fromJson` and `toJson` exported from `@belgattitude/http-exception/serializer`.



HttpException can be serialized to json and vice-versa. It can be useful in ssr frameworks such as
[nextjs](https://nextjs.org/) whenever a server error should be shared within the browser context (see also
the excellent [superjson](https://github.com/blitz-js/superjson#recipes)).

Serialization supports the [Error.cause](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/cause)
but totally ignores it the runtime (node or browser) does not support it (or without polyfills).

Additionally, you can pass any native errors (`Error`, `EvalError`, `RangeError`, `ReferenceError`, `SyntaxError`, `TypeError`, `URIError`)
as well as a custom one (the later will be transformed to the base type Error). That was necessary to support the cause param.


| Method                                                                |
|-----------------------------------------------------------------------|
| **toJson**(HttpException &#124;  NativeError &#124; Error): string    | 
| **fromJson**(string): HttpException &#124;  NativeError &#124; Error  | 

```typescript
import { HttpForbidden, HttpUnavailableForLegalReasons } from "@belgattitude/http-exception";
import { fromJson, toJson } from '@belgattitude/http-exception/serializer';

const e = new HttpForbidden({
    url: 'https://www.cool.me'
    /*
    cause: new HttpUnavailableForLegalReasons({
        cause: new Error('example with cause')
    }),   
     */
})

const json = toJson(e);
const exception = fromJson(json); // e === exception
```

