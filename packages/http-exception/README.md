# @belgattitude/http-exception

> **Warning**
> ⚠️ This package have been moved to https://github.com/belgattitude/httpx ⚠️
>
> No breaking changes, just update from `@belgattitude/http-exception` to `@httpx/exception`.

Delightful http exceptions. Crafted with node, browsers, ssr frameworks and error logging in mind.

[![npm](https://img.shields.io/npm/v/@belgattitude/http-exception?style=for-the-badge&labelColor=222)](https://www.npmjs.com/package/@belgattitude/http-exception)
[![size](https://img.shields.io/bundlephobia/minzip/@belgattitude/http-exception@latest?label=MinGZIP&style=for-the-badge&labelColor=333&color=informational)](https://bundlephobia.com/package/@belgattitude/http-exception@latest)
[![node](https://img.shields.io/static/v1?label=Node&message=14%2b&logo=node.js&style=for-the-badge&labelColor=444&color=informational)](https://browserslist.dev/?q=PjAuMjUlLCBub3QgZGVhZA%3D%3D)
[![browserslist](https://img.shields.io/static/v1?label=Browser&message=>0.25%&logo=googlechrome&style=for-the-badge&labelColor=444&color=informational)](https://browserslist.dev/?q=PjAuMjUlLCBub3QgZGVhZA%3D%3D)
[![dist](https://img.shields.io/static/v1?label=&message=cjs|esm|treeshake&logo=webpack&style=for-the-badge&labelColor=444&color=informational)](https://github.com/belgattitude/http-exception/blob/main/packages/http-exception/.size-limit.cjs)
[![ci](https://img.shields.io/github/checks-status/belgattitude/http-exception/main?label=CI&logo=github&style=for-the-badge&labelColor=444)](https://github.com/belgattitude/http-exception/actions?query=branch%3Amain)
[![codecov](https://img.shields.io/codecov/c/github/belgattitude/http-exception?logo=codecov&style=for-the-badge&labelColor=444)](https://codecov.io/gh/belgattitude/http-exception)
[![techdebt](https://img.shields.io/codeclimate/tech-debt/belgattitude/http-exception?label=TechDebt&logo=code-climate&style=for-the-badge&labelColor=444)](https://codeclimate.com/github/belgattitude/http-exception)
[![maintainability](https://img.shields.io/codeclimate/maintainability/belgattitude/http-exception?label=Maintainability&logo=code-climate&style=for-the-badge&labelColor=444)](https://codeclimate.com/github/belgattitude/http-exception)
[![license](https://img.shields.io/npm/l/@belgattitude/http-exception?style=for-the-badge&labelColor=000000)](https://github.com/belgattitude/http-exception/blob/main/LICENSE)

## Highlights

- 🚀&nbsp; Dead simple: [explicit named imports](https://belgattitude.github.io/http-exception/#/?id=named-exceptions) and/or [status code](https://belgattitude.github.io/http-exception/#/?id=factories).
- 📡&nbsp; Works everywhere: node, browsers, edge... framework agnostic, no deps.
- 🎥&nbsp; Logger friendly with [contextual](https://belgattitude.github.io/http-exception/#/?id=about-context) info. Less guessing games.
- 🐎&nbsp; [Serializable](https://belgattitude.github.io/http-exception/#/?id=serializer) to cover Server-Side-Rendering use-cases (nextjs, superjson,...).
- 🎯&nbsp; Up to standards. [extends](https://belgattitude.github.io/http-exception/#/?id=uml-class-diagram) Error class with [stack](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/stack) and [Error.cause](https://belgattitude.github.io/http-exception/#/?id=about-errorcause) support.
- 🍃&nbsp; [Lightweight](https://bundlephobia.com/package/@belgattitude/http-exception@latest) - [treeshakable](https://github.com/belgattitude/http-exception/blob/main/packages/http-exception/.size-limit.cjs) - wide [browser coverage](https://browserslist.dev/?q=PjAuMjUlLCBub3QgZGVhZA%3D%3D) (trade-off).
- ✨‍&nbsp; Default statusText as [error message](https://belgattitude.github.io/http-exception/#/?id=about-default-message). Less chars, divergence...
- 🧙‍&nbsp; IDE friendly. Typescript - typedoc with links to mdn and description.
- 🥃&nbsp; [Docs](https://belgattitude.github.io/http-exception) & [changelogs](https://github.com/belgattitude/http-exception/releases) - Well tested and maintained - [Contributors](https://github.com/belgattitude/http-exception/blob/main/CONTRIBUTING.md) welcome.

## Documentation

**👉 See full documentation on [https://belgattitude.github.io/http-exception](https://belgattitude.github.io/http-exception). 👈**

## Install

```bash
npm install @belgattitude/http-exception  # via npm
yarn add @belgattitude/http-exception     # via yarn
```

## Quick start

Simple named exceptions:

```typescript
import {
  HttpGatewayTimeout,
  HttpInternalServerError,
  HttpNotFound,
  HttpServiceUnavailable,
} from "@belgattitude/http-exception";

throw new HttpNotFound(); // message = 'Not found', statusCode = 404

// Custom message
throw new HttpServiceUnavailable("Service temporarily unavailable");

// Custom context
throw new HttpInternalServerError({
  message: "Oups, this is on our side.",
  url: "https://api.dev/gateway",
  code: "EXTERNAL_SERVICE_TIMEOUT",
  cause: new HttpGatewayTimeout({
    code: "This Serverless Function has timed out",
    errorId: "cdg1::h99k2-1664884491087-b41a2832f559",
  }),
});
```

By status code

```typescript
import { createHttpException } from "@belgattitude/http-exception";

const e404 = createHttpException(404);
const e500 = createHttpException(500, { message: "Server error" });
```

Serialization

```typescript
import { fromJson, toJson } from "@belgattitude/http-exception/serializer";

const e = new HttpForbidden();

const json = toJson(e);
const deserialized = fromJson(json);
```

More in the docs: [https://belgattitude.github.io/http-exception](https://belgattitude.github.io/http-exception)

## Support

Don't hesitate and open [an issue](https://github.com/belgattitude/http-exception/issues).

## Contributors

Contributors are warmly welcomed. Have a look to the [CONTRIBUTING](https://github.com/belgattitude/http-exception/blob/main/CONTRIBUTING.md) document.

## Sponsors ♥

If you are enjoying some of my OSS guides or libs for your company, I'd really appreciate a [sponsorship](https://github.com/sponsors/belgattitude), a [coffee](https://ko-fi.com/belgattitude) or a dropped star. That gives me a tasty morning boost and help me to make some of my ideas come true 🙏

## License

MIT
