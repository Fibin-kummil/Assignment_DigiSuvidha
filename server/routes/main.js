const express = require("express")
const router = express.Router()
const Post = require("../models/Data")
const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();  




eventEmitter.on('message_saved', (msg) => {
  console.log( msg);
});


router.get("",async(req,res)=>{
  
  try {
   res.render("index")

  } catch (error) {
    console.log(error);
  }
})



router.post('/postData', async (req, res) => {
  const { data } = req.body;
  try {
    const newData = new Post({ data });
    await newData.save();
    res.json({ message: 'Data savedd successfully' });

   eventEmitter.emit('message_saved',"Data saved successfully by eventEmitter....");

  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ message: 'Error saving data' });
  }
})

module.exports = router




