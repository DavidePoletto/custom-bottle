const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
      './public/**/*.html',
      './src/**/*.vue'
    ],
    defaultExtractor(content) {
      const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '');
      return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_:/]+/g) || [];
    }
  });
  
  module.exports = {
    plugins: [
      require('autoprefixer'),
      ...process.env.NODE_ENV === 'production' ? [purgecss] : []
    ]
  };