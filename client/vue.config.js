/*eslint-disable*/
module.exports = {
	baseUrl: '/SkeletonPOC/SkeletonAppClient/',
	configureWebpack: (config) => {
		if (process.env.NODE_ENV === 'production') {
		// mutate config for production...
		} else {
			return {
				devtool: 'source-map'
			}
		}
	}
};
