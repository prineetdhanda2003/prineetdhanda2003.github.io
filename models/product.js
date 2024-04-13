const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
  
  caption: {
    type: String,
    
  },
  Type: {
    type: String,
    required: true,
  },
  sale: {
    type:Boolean,
    

  }
});

module.exports = mongoose.model("Products", productSchema);


