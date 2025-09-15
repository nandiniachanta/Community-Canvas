const Post=require("../models/Post")
const User=require("../models/User")

exports.getposts = async(req,res)=>{
    try{
        const post=await Post.find()
        res.json(post)
    }catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
      }
};

