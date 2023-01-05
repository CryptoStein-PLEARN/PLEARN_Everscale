const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors");
require('dotenv').config()
const {port,mongoURI} = require('./config/keys')

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// Database Connection
mongoose.connect(mongoURI,
    {
        useNewUrlParser: true, useUnifiedTopology: true
    }, () => {
        console.log("Your DB is connected.");
    }
)
// Table for Login through MetaMask
const userDetailSchema = new mongoose.Schema({
    userAccount: {type: String},
})
const userDetail = new mongoose.model("metamask_login_table", userDetailSchema, "metamask_login_table");   // First & Third parameter is the 'Table/Collection' name.

// Table for saving Player game data
const playerDetailSchema = new mongoose.Schema({
    userAccount: {type: String},
    // userName: {type: String},
    //
    //
})
const playerDetail = new mongoose.model("player_detail_table", playerDetailSchema, "player_detail_table");

//Routes
app.post("/", (req,res) => {
    const {userAccount} = req.body;
    userDetail.findOne({userAccount: userAccount}, (err, user) => {
        if(user)
        {
            res.send({message: "User already registered" + " " + userAccount});
        }
        else
        {
            // Creating user in 'metamask_login_table' and 'player_detail_table'.
            const user = new userDetail({
                userAccount
            });
            const player = new playerDetail({
                userAccount
            })
            user.save(err => {
                if(err)
                {
                    res.send(err);
                }
                else
                {
                    res.send({message: "Successfully Registered!" + " " + userAccount});
                    player.save();
                }
            });
        }
    })
})
app.get('/test', (req,res) => {
    res.send("Hello User");
})

// if(process.env.NODE_ENV == 'production')
// {
//     const path = require('path');

//     app.get('/', (req,res) => {
//         res.sendFile(path.resolve(__dirname,'client','build','index.html'));
//     })
// }
//Start the server
app.listen(port,() => {
    console.log("Backend Started on " + port);
});