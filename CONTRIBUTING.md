# Contributing

Everyone is welcome to contribute, in whatever form they are comfortable with. For example:

- improve documentation,
- test features,
- fix bugs,
- or add new features.

## Getting Started

Before diving into code or content overhaul, check if your idea isn't being work on, a quick look at issues and pull requests should do. If you are still unsure, open an issue with a brief description of what would you like to do.

## Development

To start working on a bug-fix, a feature, or a content update, follow these steps:

1. Fork the repository.

2. Link package as a dev package.

To do that, when in package's directory, run `apm link --dev` in terminal. This way package will be available only in dev mode (Atom's menu bar: `View > Developer > Open in Dev Mode...`), over it's official version (if one is installed).

3. Work on a problem in a dedicated branch.

4. When done, submit a pull request to the main repository on GitHub.

### Commit messages

We are using [semantic-release], which (as part of continuous deployment) provides automatic versioning based on [conventional commits].

Detailed information about message format can be found on [conventional commits] website. It's also worth checking past commits and pull requests to get an idea about how and which types are used within the repository.

Each commit is checked by [commitlint], run by [Husky], and will point out any issues with a commit message - no need to worry about accidental, incorrect commits.

### Debugging

For general information regarding debugging in Atom, take a look at [debugging][atom-debugging] section of the Atom Flight Manual.

### Language Server Protocol (LSP)

Atom IDE packages revolve around [language server protocol], for which integration base is provided by [atom-languageclient].

To log communication between Atom and a language server, dedicated debugging option needs to be set in Atom's configuration, `atom.config.set('core.debugLSP', true)` - e.g. through [init file]. Log entries should be visible in the console, in Developer Tools (`ctrl+shift+i`), e.g.:

```
TypeScript (Theia) [Started] Starting Theia for some-project
rpc.sendRequest textDocument/definition sending {textDocument: {…}, position: {…}}
rpc.sendRequest textDocument/definition received (27ms) [{…}]
```

_Note: "Verbose" log level is required for some entries_

[semantic-release]: https://github.com/semantic-release/semantic-release
[conventional commits]: https://www.conventionalcommits.org/en/v1.0.0
[commitlint]: https://commitlint.js.org
[husky]: https://github.com/typicode/husky
[atom-debugging]: https://flight-manual.atom.io/hacking-atom/sections/debugging/
[atom-languageclient]: https://github.com/atom/atom-languageclient
[language server protocol]: https://microsoft.github.io/language-server-protocol/
[init file]: https://flight-manual.atom.io/hacking-atom/sections/the-init-file/
