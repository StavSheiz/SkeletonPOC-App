/*eslint-disable*/
module.exports = {
	baseUrl: '/SkeletonPOC/SkeletonPOCClient/',
	configureWebpack: (config) => {
		if (process.env.NODE_ENV === 'production') {
			return {
				output: {
					library: "skelpoc",
					libraryTarget: "umd",
				}
			}
		} else {
			return {
				devtool: 'source-map',
				output: {
					library: "skelpoc",
					libraryTarget: "umd",
				}
			}
		}
	}
};
