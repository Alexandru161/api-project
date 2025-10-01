// pentru transformarea numelui în majuscule
function uppercaseQuery(req, res, next) {
  if (req.query.name) {
    req.query.name = req.query.name.toUpperCase();
  }
  next();
}

module.exports = uppercaseQuery;
