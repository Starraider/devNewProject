module.exports = {
  plugins: {
    // include whatever plugins you want
    // but make sure you install these via yarn or npm!

    // add browserslist config to package.json (see below)
    'postcss-import': {},
    'postcss-preset-env': {
      stage: 1,
    },
    'postcss-write-svg': {},
    'postcss-discard-comments': {},
    autoprefixer: {},
    cssnano: {
      preset: 'default',
    },
  },
}
