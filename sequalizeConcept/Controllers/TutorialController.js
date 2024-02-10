const Tutorial = require("../Model/Tutorial");
const Sequelize = require('sequelize');
TutorialController = {};

TutorialController.index = async (req, res, next) => {
  try {
    let data = await Tutorial.findAll();
    // res.send(data);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
};
TutorialController.createBulkData = async (req, res, next) => {
  try {
    const loopData = [];
    for (let i = 3; i < 10; i++) {
      const data = {
        title: "Tutorial " + i,
        description: "Tutorial description " + i,
        published: false,
      };
      loopData.push(data);
    }
    if(loopData.length>0){
      let insertedData = await Tutorial.bulkCreate(loopData);
      if(insertedData){
        res.status(200).json({message:"data created successfully"});
      }else{
        res.status(500).json({message:"data not created successfully"});
      }
    }else{
      res.status(500).json({message:"No data found"});
    }
    
   
  } catch (error) {
    console.log(error);
    return res.send(error);
  }

  res.send(loopData);
};
TutorialController.create = async (req, res, next) => {
  try {
    const { title, description, published } = req.body;
    const data = {
      title: title,
      description: description,
      published: published ? published : false,
    };
    await Tutorial.create(data);
    res.send("data created successfully");
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
};

TutorialController.whereInFunction = async(req,resp,next) => {
  let data = await Tutorial.findAll({
    where : {
      id:{
        [Sequelize.Op.in] : [5,6],
        // [Sequelize.Op.gt] : 2,
        // [Sequelize.Op.lt] : 7
      }
    }
  });
  resp.status(200).json({'data':data});
};

TutorialController.edit = async ({ params }, resp, next) => {
  try {
    let data = await Tutorial.findOne({
      where: { id: params.id },
    });
    if (data) {
      resp.status(200).json(data);
    } else {
      resp.status(404).json({ error: "Data not found" });
    }
  } catch (error) {
    resp.status(500).json({ error: "Internal Server Error" });
  }
};

TutorialController.update = async (req, res, next) => {
  try {
    const { title, description, published } = req.body;
    const data = {
      title: title,
      description: description,
      published: published ? published : false,
    };
    await Tutorial.update(data, { where: { id: req.params.id } });
    res.status(200).json({ message: "data updated successfully" });
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
};

module.exports = TutorialController;
