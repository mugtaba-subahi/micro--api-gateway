import slsw from 'serverless-webpack';

const mode = process.env.NODE_ENV === ('production' || 'staging') ? 'production' : 'development';

module.exports = {
  mode, // dev mode allows hot reload
  entry: slsw.lib.entries,
  externals: ['bufferutil', 'utf-8-validate'], // stops warning - why?
};
