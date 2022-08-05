const mongoose = require('mongoose')
const Schema = mongoose.Schema


const ApplicationSchema = new Schema({
  firstName:{
    type: String,
    required: true
  },
  lastName:{
    type: String,
    required: true
  },
  age:{
    type: Number,
    required: true
  },
  occupation:{
    type: String,
    required: true
  },
  fatherName:{
    type: String,
    required: true
  },
  motherName:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  Number:{
    type: Number,
    required: true
  },
  address:{
    type: String,
    required: true
  },
  pincode:{
    type: Number,
    required: true
  },
  state:{
    type: String,
    required: true
  },
  country:{
    type: String,
    required: true
  },
  bussinessName:{
    type: String,
    required: true
  },
  bussinessAddress:{
    type: String,
    required: true
  },
  shopNo:{
    type: String,
    required: true
  },
  gstNo:{
    type: String,
    required: true
  },
  bussinessDescription:{
    type: String,
    required: true
  },
  bussinessPhoneNumber:{
    type: Number,
    required: true
  },
  bussinessEmail:{
    type: String,
    required: true
  },
  loanAmount:{
    type: Number,
    required: true
  },
  interestRate:{
    type: String,
    required: true
  },
  tenture:{
    type: Number,
    required: true
  },
  sDate:{
    type: String,
    required: true
  },
  eDate:{
    type: String,
    required: true
  }
})


module.exports = mongoose.model('Application',ApplicationSchema)
