module.exports = {
    entry: "./src/entry.js",
    output: {
        path: __dirname,
        filename: "js/bundle.js"
    },
    module: {
	  loaders: [
	    {
	      test: /\.js?$/,
	      include: /(src)/,
	      loader: 'babel',
	      query: {
	        presets: ['es2015', 'react']
	      }
	    }
  	]
}
};