# Git

- [Git](#git)
  - [Release Numbers](#release-numbers)
  - [Git commits](#git-commits)
  - [Git-Flow](#git-flow)
  - [CHANGELOG.md](#changelogmd)
  - [README.md](#readmemd)

## Release Numbers

The scheme for release numbers is: major.minor.build (example: 11.2.12).
In this project the major number is connected with the version number of TYPO3. This means, as long as the project is based on TYPO3 v11.x.x, the major number is also 11.x.x, and so on.

## Git commits

Unfortunately, it is common practice in the TYPO3 community not to format the structure of commit messages according to an established standard, but to introduce their own format. The format looks like this:

```yaml
[<TYPE>](<Scope>): <Subject>
```

Possible Types are:

- [FEATURE]
- [BUGFIX]
- [DOCS]
- [TASK]
- [SECURITY]
- [RELEASE]

In the root folder you can find a ``commitlint.config.js``, which you can use to lint your commit messages, before you send them to the repository. For "Visual Studio Code" I recomment using the extension "Conventional Commits", which supports commitlint.config.js.

## Git-Flow

"Git Flow" is a git branching and release management workflow that helps to keep track of features, hotfixes, and releases.
For the best introduction to get started with "Git Flow", please read [Jeff Kreeftmeijer's blog post](http://jeffkreeftmeijer.com/2010/why-arent-you-using-git-flow/)

Flow Branches:

  - main (only for productive code)
  - develop (in this branch the development takes place)
  - feature (for the development for (bigger) new features; based on the develop branch)
  - release (for the merging of develop into main; based on the develop branch)
  - hotfix (only for hotfixes, based on the main branch)

The easiest way to follow the principles of "Git Flow" is to use the [Git Flow extensions](https://github.com/nvie/gitflow).

## CHANGELOG.md

The easiest way to keep the ``CHANGELOG.md`` uptodate, is generating it automaticly from the commit messages. In this project the CHANGELOG generator "[git chglog](https://github.com/git-chglog/git-chglog#bin)" is used, to generate the ``CHANGELOG.md`` file.

## README.md

To generate a "table of content" in the markdown files, you can use the plugin "Markdown All in One" for VS Code.
open the command palette (Control/⌘+Shift+P) and select the "Select Markdown: Create Table of Contents" option.
