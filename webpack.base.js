const Preprocess = require('svelte-preprocess');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    TPForm: './src/runner',
    app: './src/app'
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        exclude: /node_modules/,
        use: {
          loader: 'svelte-loader',
          options: {
            // As of our app is an embedded widget, bundle styles too
            emitCss: false,
            hotReload: true,
            preprocess: Preprocess({
							postcss: {
								plugins: [require('autoprefixer')],
							},
						})
          },
        }
      },
      {
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.svelte']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'head',
      chunks: ['TPForm']
    })
  ]
};
