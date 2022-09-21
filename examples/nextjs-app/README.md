# Nextjs example

## Development

> Will use tsconfig path aliases, changes in @belgattitude/http-exception packages
> are immediately reflected

```
yarn dev
```

## Build

> Won't use tsconfig path aliases and thus requires a build of @belgattitude/http-exception packages.

```
yarn g:build-packages
yarn build
yarn start
```
