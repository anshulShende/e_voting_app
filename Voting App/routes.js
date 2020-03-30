const routes = require('next-routes')();

routes
.add('/candidates/new', '/candidates/new')
.add('/votingTable', '/votingTable')
//.add('/campaigns/:address', '/campaigns/show')
//.add('/campaigns/:address/requests', '/campaigns/requests/index')
//.add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;