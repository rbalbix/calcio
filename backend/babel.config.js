module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@controllers': './src/app/controllers',
        '@models': './src/app/models',
        "@config": "./src/config",
        "@database": "./src/database",
        "@services": "./src/services"
      }
    }],
    '@babel/plugin-proposal-export-namespace-from'
  ],
  ignore: [
    'node_modules',
    '__tests__'
  ]
}
