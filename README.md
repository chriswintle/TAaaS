# Terrible Advice as a Service - TAaaS



Simple MongoDB-backed REST API for generating and returning Terrible Advice.



## Installation

**NPM** You must have NodeJS and NPM installed. 

**MongoDB** We require MongoDB to be running - currently configured to connect to a Dockerised Mongo instance (and a different one for Integration tests - see *config/config.js* for more info. 

**Testing**

	npm test
or 

	mocha
	
Either command will run both Unit and Integration Tests. (Note, you'll need Mongo running for Integration tests)

**Running the app**

	npm start

The app will bootstrap a selection of terrible advice if nothing yet exists. The app currently listens on port 8080.

**Endpoints**

* [GET] / - get all Terrible Advice
* [GET] /random - get a random piece of terrible advice
