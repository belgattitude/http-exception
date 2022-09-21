---
'@belgattitude/http-exception': patch
---

Fix `Error.cause` on node < 16.9 and browsers that don't support for it.

- **Browser** currently 89% support: [caniuse#error.cause](https://caniuse.com/mdn-javascript_builtins_error_error_options_cause_parameter) - (89% supports it as of sept 2022)
- **Node** from 16.9.0 as per [mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/cause#browser_compatibility).

The strategy used can be summarized as:

> If the browser or the node runtime does not support Error.cause parameter in the
> constructor, it will simply be discarded.
> ie: 
> ```
> const err = new HttpNotFound({cause: new Error()});
> console.log(err.cause) -> undefined if no support
> console.log(err.cause) -> Error cause if supported
> ```

To enable older browser or previous node versions, there's 2 polyfills that should
do the job

- [error-cause-polyfill](https://github.com/ehmicky/error-cause-polyfill)
- [error-cause](https://github.com/es-shims/error-cause)

