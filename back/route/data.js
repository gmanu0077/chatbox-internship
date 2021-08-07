const router = require('express').Router();
 
const Data=require('../data/data.json');
 

router.route('/').get((req,res) => {
  try{ 
    
    
      res.json(Data)
     
    }catch(err){
      res.json(err)
    }
     
     
});
router.route('/topics').get((req,res) => {
  try{ 
    console.log(Data.chats)
    
    res.json(Data.chats)
     
    }catch(err){
      res.json(err)
    }
     
     
});


  module.exports=router