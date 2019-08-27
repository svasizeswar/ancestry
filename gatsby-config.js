/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	/* Your site config here */
	plugins: [
		// `ancestry-drupal-source`
		{
			resolve: 'gatsby-source-drupal',
			options: {
				baseUrl: 'http://devel.ravendevelopers.com/ancestry/',
				apiBase: 'jsonapi', // endpoint of Drupal server
			},
		}
	]
};
