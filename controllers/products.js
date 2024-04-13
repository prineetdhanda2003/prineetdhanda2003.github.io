


//const DB_STRING = require('dotenv')
const { get } = require('jquery');

//const {MongoClient } = require('mongodb')
const { db } = require('../models/product');
const Products = require('../models/product')
const User = require('../models/User')



module.exports = {
  
    getProducts: (req, res) => {
      try{
        
        const product = db.collection('products').find().toArray()
        .then(result =>{
      res.render("products.ejs", {product: result}) });
    }  catch (err) {
      console.log(err);}},


      getMan: (req, res) => {
        try{
          
          const product = db.collection('products').find({$or:[ {type: 'male'},{ type: 'unisex'}]}).toArray()
          .then(result =>{
        
        res.render("man.ejs", {product: result})  });
      }  catch (err) {
        console.log(err);}},



        getWoman: (req, res) => {
          try{
            
            const product = db.collection('products').find({$or:[ {type: 'female'},{ type: 'unisex'}]}).toArray()
            .then(result =>{
          
          res.render("woman.ejs", {product: result})  });
        }  catch (err) {
          console.log(err);}},
  



      getSale: (req, res) => {
        try{
          
          const product = db.collection('products').find({ sale: 'true'}).toArray()
          
          .then(result =>{
           
              
            
        res.render("sale.ejs", {product: result})  });
      }  catch (err) {
        console.log(err);}},



    getProductPage: async (req, res) => {
      try{
        

        
          const {id} = Products.findById(req.params.id)                         //finding product by ID
          .then( result =>{                                                     //result is the found document
            res.render("productPage.ejs",{product: result})                          //result will be referenced in EJS as product, :id is not required            
          
                                                                                       
        })   
        }catch (err) {
          console.log(err);}
      },catch (err) {
        console.log(err);},





        addWishlist: async (req, res) => {
          try {
            const user = await Users.findOne({
              email: req.body.email,
              password: req.body.password
            })
            const prodId = req.body
            await user.findOneAndUpdate(
              { wishlist: req.params.wishList },
              {
                $push: { prodId},
              }
            );
            console.log("added to wishlist");
            res.redirect(`/prodductPage/${req.params.id}`);
          } catch (err) {
            console.log(err);
          }
        },
        deleteWishlist: async (req, res) => {
          try {
            // Find post by id
            let post = await Post.findById({ _id: req.params.id });
            // Delete image from cloudinary
            await cloudinary.uploader.destroy(post.cloudinaryId);
            // Delete post from db
            await Post.remove({ _id: req.params.id });
            console.log("Deleted Post");
            res.redirect("/profile");
          } catch (err) {
            res.redirect("/profile");
          }
        },
    }













        //) //mongoCL
      
     //}catch (err) {console.log(err);} //try
     // }  //async



     /* getMale: (req, res) => {
        try{
          

          
          const product = db.collection('products').find().toArray()
          .then(result =>{
            let params = result.req.params.type 
           // const {type} = result.find(req.query.type) 
        res.render("products.ejs", {params: params}) });
      }  catch (err) {
        console.log(err);}}, */
            

          //var db = client.db('test')          //finds the database
          //const product = db.collection('products').find()   //finds document AND collection

//}//moduleEx









/*  ********* THROWN OUT CODE/ ONLY USE FOR REFERENCE *****************

       let mongo = MongoClient.connect(DB_STRING, { useUnifiedTopology: true },function (err,client) { //connects to database
           if (err) throw err;
           .then








           */