module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: false,
        targets: {
          node: 'current'
        }
      }
    ]
  ],
  plugins: ['@babel/plugin-transform-runtime']
}
