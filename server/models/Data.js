const mongoose = require("mongoose")

const Schema =  mongoose.Schema

const dataSchema = new Schema({
  data: {
    type: String
  }
})

module.exports = mongoose.model('Data', dataSchema)


