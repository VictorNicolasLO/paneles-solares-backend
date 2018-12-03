const mongoose = require('mongoose'),
  Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const SALT_WORK_FACTOR = 10;

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: Number, min: 1, max: 5 },
  meta: {
    timestamp: { type: Date, default: Date.now }
  }
});

// Hash password
UserSchema.pre('save', function(next) {
  var user = this;
  if (!user.isModified('password')) return next();

  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);

      user.password = hash;
      next();
    });
  });
});

//Validations
UserSchema.path('email').validate(function(email) {
  var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailRegex.test(email.text); // Assuming email has a text attribute
}, 'The e-mail field cannot be empty.');

mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');
