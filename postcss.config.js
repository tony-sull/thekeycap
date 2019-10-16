const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./static/global.css', './src/**/*.svelte', './src/**/*.html'],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
})

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV !== 'development' ? [purgecss] : []),
  ],
}
