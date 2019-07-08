/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { override, fixBabelImports, addWebpackAlias } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  addWebpackAlias({
    ['@ant-design/icons/lib/dist$']: path.resolve(__dirname, 'src/icons/icons.js'),
  }),
);
