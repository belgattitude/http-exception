# Contributing

The base branch is **`main`**.

## Structure

## Structure

```
.
├── examples
│   └── nextjs-app
└── packages
    └── http-exception
```

## Workflow

- Makes changes, push and create a P/R on github.

## Checklist

- [x] **tests** should be included part of your PR (`yarn g:test-unit`)
- [x] a **changeset** should be provided (`yarn g:changeset`) when applicable.
- [x] **documentation** should be updated (`yarn g:build-doc` helps to api doc).

## Locally

| Name                         | Description                                                                                                                          |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `yarn g:changeset`           | Add a changeset to declare a new version                                                                                             |
| `yarn g:typecheck`           | Run typechecks in all workspaces                                                                                                     |
| `yarn g:lint`                | Display linter issues in all workspaces                                                                                              |
| `yarn g:lint --fix`          | Attempt to run linter auto-fix in all workspaces                                                                                     |
| `yarn g:test-unit`           | Run unit tests in all workspaces                                                                                                     |
| `yarn g:build`               | Run build in all workspaces                                                                                                          |
| `yarn g:clean`               | Clean builds in all workspaces                                                                                                       |
| `yarn g:check-dist`          | Ensure build dist files passes es2017 (run `g:build` first).                                                                         |
| `yarn g:check-size`          | Ensure build files are within size limit (run `g:build` first).                                                                      |
| `yarn g:build-doc`           | Build documentation (generally api doc)                                                                                              |
| `yarn clean:global-cache`    | Clean tooling caches (eslint, jest...)                                                                                               |
| `yarn deps:check --dep dev`  | Will print what packages can be upgraded globally (see also [.ncurc.yml](https://github.com/sortlist/packages/blob/main/.ncurc.yml)) |
| `yarn deps:update --dep dev` | Apply possible updates (run `yarn install && yarn dedupe` after)                                                                     |
| `yarn check:install`         | Verify if there's no peer-deps missing in packages                                                                                   |
| `yarn dedupe`                | Built-in yarn deduplication of the lock file                                                                                         |

## Git message format

This repo adheres to the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) convention.

Commit messages are enforced through [husky](https://github.com/typicode/husky) git hooks. The latest configuration options can be found in [commitlint.config.js](https://github.com/sortlist/packages/blob/main/commitlint.config.js), they are
enforced on commit thanks to [husky](https://github.com/typicode/husky).

Note that the commit message prefix is only valuable for commits, it does not make
sense to use them for the github pull-request title.

### Activated prefixes

- **chore**: Changes that affect the build system or external dependencies
- **ci**: Changes to our CI configuration files and scripts
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **lint**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test**: Adding missing tests or correcting existing tests
- **translation**: Adding missing translations or correcting existing ones
- **revert**: When reverting a commit
- **style**: A change that affects the scss, less, css styles
- **release**: All related to changeset (pre exit...)
