const user = require('../models/User')
const { MongoClient } = require('mongodb');



module.exports = {
  getIndex: (req, res) => {
    res.render("index.ejs");
  },
  getInfo: (req, res) => {
    res.render("info.ejs");
  },


 /* getProfile: async (req, res) => {
    try {

    let mongo = MongoClient.connect({ useUnifiedTopology: true },function (err,client) { //connects to database
      if (err) throw err;
     
       const {profile} = user.findById(req.params.id)                         //finding product by ID
       .then( result =>{                                                     //result is the found document
         res.render("profile.ejs",{profile: result})                          //result will be referenced in EJS as product, :id is not required            
       
                                                                                    
     })   //.then
     })
} */catch (err) {
  console.log(err);},

  /*getSignup: (req, res) => {
    
    res.render("signup.ejs", {
      title: "Create Account",
    });
    
  } */

}

 
//};
