const express = require('express');
const chai = require('chai');
const expect = chai.expect;

const app = express();
app.use(express.json());

const url = "https://dev93093.service-now.com/oauth_token.do";

app.post("url", async(req,res)=>{
    var data = {
        "username" : "admin",
        "password" : "*Tb=k44PMmQi",
        "clientid" : "6d08386970b61110e2533bab891f9117",
        "clientsecret" : "y)[h&;j$h)"
    }
})