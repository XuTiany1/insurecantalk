const mongoose = require("mongoose");
const uuid = require('uuid');
const fs = require('fs');
const axios = require('axios');
const ytdl = require('ytdl-core');

// Mongoose model
const UserInfo = require("../models/userInfoModel");

// Constants
const mongodatabaseURL = "mongodb://localhost:27017/testerDB";

// API Key
const headers = {
    authorization: 'be7c217f9fa74716bc17362e124f0df7'
  };


// Variable to be sent to Frontend with Database status
var databaseConnection = "Waiting for Database response...";


/* DEFAULT */
const landingFunction = async(req, res, next) => {

    console.log("Using the default landingFuntion");


    try{
        // Connect to database
        mongoose.connect(mongodatabaseURL, { useNewUrlParser: true})
        .then(() => {
            console.log("DATABASEE connected");
            databaseConnection = "Connected to Database";
        })
        .catch((err) => {
            console.log(err);
            databaseConnection = "Error connecting to Database";
        });

        res.send(databaseConnection).status(200);

    } catch (err){
        res.send("error!")
    }
}


const postUserInfo = async(req, res, next) => {

    console.log("Received the request");

    try{
        // Connect to database
        mongoose.connect(mongodatabaseURL, { useNewUrlParser: true})
        .then(() => {
            console.log("DATABASEE connected");
            databaseConnection = "Connected to Database";
        })
        .catch((err) => {
            console.log(err);
            databaseConnection = "Error connecting to Database";
        });


    } catch (err){
        res.send("error!")
    }

    console.log(req.body)

    const currUserInfo = new UserInfo({
                    userName: req.body.userName,
                    userEmail: req.body.userEmail,
                    question1: req.body.question1
                });


    await currUserInfo.save()
        .then(() => {
                console.log('new userInfo created')
            })
        .catch((err) => console.log(err));

    res.send({"result":"accepted"}).status(200);

}

const getUserInfo = async(req, res, next) => {

    console.log("Received the request");

    try{
        // Connect to database
        mongoose.connect(mongodatabaseURL, { useNewUrlParser: true})
        .then(() => {
            console.log("DATABASEE connected");
            databaseConnection = "Connected to Database";
        })
        .catch((err) => {
            console.log(err);
            databaseConnection = "Error connecting to Database";
        });


    } catch (err){
        res.send("error!")
    }

    console.log(req.body)

    let query = {
        "userName": req.body.userName
    }
    let result = await UserInfo.find({});

    console.log(query);
    console.log(result);

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);

}

const deleteUserInfo = async(req, res, next) => {

    console.log("Received the request");

    try{
        // Connect to database
        mongoose.connect(mongodatabaseURL, { useNewUrlParser: true})
        .then(() => {
            console.log("DATABASEE connected");
            databaseConnection = "Connected to Database";
        })
        .catch((err) => {
            console.log(err);
            databaseConnection = "Error connecting to Database";
        });


    } catch (err){
        res.send("error!")
    }

    console.log(req.body)

    let query = {
        "userName": req.body.userName
    }
    let result = await UserInfo.findOneAndDelete(query);

    console.log(query);
    console.log(result);

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);

}




// Exporting the functions from controller to the router
module.exports = {landingFunction, postUserInfo, getUserInfo, deleteUserInfo}



