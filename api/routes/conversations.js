const router = require("express").Router();
const Conversation = require("../models/Conversation");

//new conv

router.post("/", async (req, res) => {
  const newConversation = new Conversation({
    members: [req.body.senderId, req.body.receiverId]
  })
})

  try{

  }catch(err) {
    res.status(500).json(err)
  }

//get conv of a user

module.exports = router;
