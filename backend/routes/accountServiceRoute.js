const express = require("express");

const {landingFunction, postUserInfo, getUserInfo, deleteUserInfo} = require("../controllers/accountServiceController");

  
const router = express.Router();
  
/* READ */
router.get("/", landingFunction);
  
/* User Info */
router.post("/userInfo", postUserInfo);
router.get("/userInfo", getUserInfo);
router.delete("/userInfo", deleteUserInfo);


module.exports = router
