require ('dotenv').config()


console.log("Hello Rohan");

const express = require("express");
const app  = express()
const port = process.env.PORT || 4000;



const githubData = {
    "login": "Rohan235",
    "id": 65803770,
    "node_id": "MDQ6VXNlcjY1ODAzNzcw",
    "avatar_url": "https://avatars.githubusercontent.com/u/65803770?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Rohan235",
    "html_url": "https://github.com/Rohan235",
    "followers_url": "https://api.github.com/users/Rohan235/followers",
    "following_url": "https://api.github.com/users/Rohan235/following{/other_user}",
    "gists_url": "https://api.github.com/users/Rohan235/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Rohan235/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Rohan235/subscriptions",
    "organizations_url": "https://api.github.com/users/Rohan235/orgs",
    "repos_url": "https://api.github.com/users/Rohan235/repos",
    "events_url": "https://api.github.com/users/Rohan235/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Rohan235/received_events",
    "type": "User",
    "site_admin": false,
    "name": "rohan235",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 19,
    "public_gists": 0,
    "followers": 1,
    "following": 0,
    "created_at": "2020-05-23T06:19:33Z",
    "updated_at": "2024-02-03T11:56:59Z"
  }


  app.get('/github',(req,res)=>{
    res.json(githubData);
  })
app.get('/',(req,res) =>{
    res.send("hello world")
})


app.get("/twitter" , (req,res)=>{
    res.send('Rohan Jadhav');
})

app.listen( process.env.PORT ,()=>{
    console.log(`Example app lsitneing on port ${port}`);
})
