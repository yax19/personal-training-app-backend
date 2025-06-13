// check pass user modules from class
// modify
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});


userSchema.pre('save', async function () {
  this.password = await bcrypt.hash(this.password, 10);
});



module.exports = mongoose.model('User', userSchema);
