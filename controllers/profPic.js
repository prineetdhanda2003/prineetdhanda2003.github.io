/*const cloudinary = require("../middleware/cloudinary");
const ProfPic = require("../models/profPic.js");







module.exports = {
  newProfPic: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path, {folder:"samples"});
      await ProfPic.create({
        user:req.user,
        image: result.secure_url,
        cloudinaryId: result.public_id,
      });

     
      console.log("New Prof Pic has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },

  
  deletePost: async (req, res) => {
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
  getPic: async (req, res) => {
    try {
      const profPic = await ProfPic.findById("633899efe73d866de87a0058")   /**finds the post */   
     /* const image = "https://res.cloudinary.com/doac56ago/image/upload/v1664653806/samples/…"
      /*res.render("profile.ejs", { profPic: profPic, image: image}); /**renders in the EJS */ /*
      
      
    } catch (err) {
      res.redirect("/feed");
    }
}
}
*/