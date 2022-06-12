# Git

## Git commits

Unfortunately, it is common practice in the TYPO3 community not to format the structure of commit messages according to an established standard, but to introduce their own format. The format looks like this:

```bash
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

For the best introduction to get started with git flow, please read [Jeff Kreeftmeijer's blog post](http://jeffkreeftmeijer.com/2010/why-arent-you-using-git-flow/)

## CHANGELOG.md

The easiest way to keep the ``CHANGELOG.md`` uptodate, is generating it automaticly from the commit messages. In this project the CHANGELOG generator "[git chglog](https://github.com/git-chglog/git-chglog#bin)" is used, to generate the ``CHANGELOG.md`` file.
