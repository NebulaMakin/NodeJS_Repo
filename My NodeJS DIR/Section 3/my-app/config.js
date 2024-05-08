/*
 *Create and export configuration variables
 *
 */

// Container for all the environments
var environments = {};

// Staging (default) environment (if user have not defined any value for NODE_ENV)
environments.staging = {
	'port' : 3000,
	'envName' : 'staging'
};


// Production environment
environments.production = {
	'port' : 5000,
	'envName' : 'production'
};

// Detwermine which environment was passed as a command-line argument
var currentEnvironment = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';

// Check that the current environment is one of the environments above, if it is not, default to staging
var environmentToExport = typeof(environments[currentEnvironment]) == 'object' ? environments[currentEnvironment] : environments.staging;

//Export the module (only the ones that we require!!)
module.exports = environmentToExport