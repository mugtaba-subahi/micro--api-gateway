import slsw from 'serverless-webpack';

module.exports = {
  entry: slsw.lib.entries,
  optimization: { minimize: true },
};
