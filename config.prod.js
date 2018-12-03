const SECRET = process.env.SECRET;
console.log(SECRET);
module.exports = {
  secret: SECRET,
  database: 'mongodb://mongodb:27017'
};
