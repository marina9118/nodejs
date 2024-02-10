const Tutorial = require("../Model/Tutorial");
const Post = require("../Model/Post");
const Sequelize = require('sequelize');
PostController = {};

PostController.index = async (req, res, next) => {
    try {
      let data = await Post.findAll();
      // res.send(data);
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      return res.send(error);
    }
  };

  PostController.create = async (req,resp,next) => {
    let message = "";
    try{
        const {tutorial_id,title,description} = req.body;
        let data = {
            tutorial_id:tutorial_id,
            title:title,
            description:description,
        }
        let query = await Post.create(data);
        message = "Post inserted successfully";
    }catch(error){
        message = error;
    }
    resp.status(200).json({message:message});
  };

  PostController.edit = async(req,resp,next)=>{
    // resp.send(req.params);
    let message = "";
    let data = "";
    try{
        data =await Post.findOne({
            where : { id : req.params.id}
        })

        // resp.send(data.Tutorial.title);
    }catch(error){
        message = error;
    }
    resp.status(200).json({message:message,data:data,rel:data.tutorial.title});
  }
  module.exports = PostController;