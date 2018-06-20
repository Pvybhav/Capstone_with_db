switch (process.env.NODE_ENV) {
  case 'prod':
  case 'production':
    module.exports = require('./config/webpack.prod');
    break;

  case 'dev':
  case 'development':
  default:
    module.exports = require('./config/webpack.dev');
};
// rules: [{
//   test: /\.css$/,
//   oneOf: [{
//       resourceQuery: /^\?global$/,
//       use: [
//           require.resolve('style-loader'),
//           require.resolve('css-loader')
//       ]
//   }, {
//       use: [
//           require.resolve('style-loader'),
//           {
//               loader: require.resolve('css-loader'),
//               options: {
//                   importLoaders: 1,
//                   modules: true,
//                   localIdentName: '[name]__[local]___[hash:base64:5]'
//               }
//           },
//           require('./postcss-loader')
//       ]
//   }]
// }]
rules = {
	test: /\.scss$/,
	use: [
		{loader: "style-loader"},
		{loader: "css-loader"},
		{
			loader: "postcss-loader",
			options: {config: {path: 'config/postcss.config.js'}}
		},
		{loader: "sass-loader"}
	]
}