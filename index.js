const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));
app.get("/",async(req,res) => {
return res.status(200).json({
  message:"welocme to api"
})
})


app.post("/authenticate", async (req, res) => {
    const { username } = req.body; 
    try{
          const r=await axios.put('https://api.chatengine.io/users/',
          {username:username , secret:username , first_name:username},
          {headers:{"private-key": "51ccca44-b392-4e9b-bce8-d035cd38b707 "}}
          ) 
          return res.status(r.status).json(r.data)
    } 
    catch(e){
      return res.status(e.response.status).json(e.response.data)
    }
    
  });

app.listen(3002);