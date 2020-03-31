const routes = require('next-routes')();

routes
.add('/:locale', '/')
.add('/candidates/new', '/candidates/new')
.add('/:locale/votingTable', '/votingTable')
.add('/:locale/vote', '/vote')
//.add('/campaigns/:address', '/campaigns/show')
//.add('/campaigns/:address/requests', '/campaigns/requests/index')
//.add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;