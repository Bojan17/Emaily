var localtunnel = require('localtunnel');
localtunnel(5000, { subdomain: 'bojanssubdomain' }, function(err, tunnel) {
  console.log('LT running');
});
