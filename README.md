# @belgattitude/http-exception

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
[![ko-fi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/belgattitude)

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

```typescript
import {
  HttpNotFound,
  HttpInternalServerError,
  HttpNotImplemented,
} from "@belgattitude/http-exception";

// Simple
throw new HttpNotFound(); // message = 'Not found'

// Custom message
throw new HttpNotFound("Record #1234 not found");

// With all properties
throw new HttpInternalServerError({
  message: "Something really wrong happened.",
  url: "https://api-gateway.dev/service",
  cause: new HttpNotImplemented({
    cause: new Error("Error.cause"),
  }),
});
```

## Contributors

Initiated by [Sébastien Vanvelthem](https://github.com/belgattitude). Contributors welcome

## Support

Open an issue.

## License

MIT
