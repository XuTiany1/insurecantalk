const express = require("express");

const {landingFunction, postUserInfo} = require("../controllers/accountServiceController");

  
const router = express.Router();
  
/* READ */
router.get("/", landingFunction);
  
/* POST */
router.post("/userInfo", postUserInfo);


module.exports = router
