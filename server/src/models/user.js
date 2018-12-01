const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')

// chema for user model
const userSchema = mongoose.Schema({
  local: {
    nick: String,
    email: String,
    password: String
  }
  // facebook: {
  //   id: String,
  //   token: String,
  //   name: String,
  //   email: String
  // },
  // twitter: {
  //   id: String,
  //   token: String,
  //   displayName: String,
  //   username: String
  // },
  // google: {
  //   id: String,
  //   token: String,
  //   email: String,
  //   name: String
  // }
})

// generating a hash
userSchema.methods.generateHash = password => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

// password vaildation check
userSchema.methods.validPassword = password => {
  return bcrypt.compareSync(password, this.local.password)
}

module.exports = mongoose.model('User', userSchema)
