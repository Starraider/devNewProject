module.exports = {
    extends: '@commitlint/config-conventional',
    parserPreset: {
        parserOpts: {
            headerPattern: /^(\[\w*\])?:\(?(\w*)\)?\s(.+)/,
            headerCorrespondence: ['type', 'scope', 'subject'],
        },
    },
    rules: {
        'type-enum': [
            2,
            'always',
            [
                '[FEATURE]',
                '[BUGFIX]',
                '[DOCS]',
                '[TASK]',
                '[SECURITY]',
                '[RELEASE]',
            ],
        ],
        'type-case': [2, 'always', 'upper-case'],
        'type-empty': [2, 'never'],
        'subject-case': [2, 'always', 'sentence-case'],
        'subject-empty': [2, 'never'],
        'subject-full-stop': [2, 'never', '.'],
    },
}
