const express =require('express');
const app=express();
app.get ('/',(req,res)=>{
    res.status(200).json([
      {
        "cursor": "0YUhloWSeyltbm03YXZqZGwyOWtibGww",
        "service": {
          "id": "srv-ch9vmnm7avjdl29kbll0",
          "autoDeploy": "yes",
          "branch": "main",
          "buildFilter": null,
          "createdAt": "2023-05-04T18:37:18.901699Z",
          "name": "ToDoServer",
          "notifyOnFail": "default",
          "ownerId": "usr-ch54u5ks3fvqdilh4gfg",
          "repo": "https://github.com/t058329/ToDoList",
          "rootDir": "",
          "slug": "todoserver-xrby",
          "suspended": "not_suspended",
          "suspenders": [],
          "type": "web_service",
          "updatedAt": "2023-05-13T19:37:55.899324Z",
          "serviceDetails": {
            "disk": null,
            "env": "docker",
            "envSpecificDetails": {
              "dockerCommand": "",
              "dockerContext": ".",
              "dockerfilePath": "Dockerfile"
            },
            "healthCheckPath": "",
            "numInstances": 1,
            "openPorts": null,
            "parentServer": null,
            "plan": "free",
            "pullRequestPreviewsEnabled": "no",
            "region": "singapore",
            "url": "https://todoserver-xrby.onrender.com"
          }
        }
      },
      {
        "cursor": "JUxQ_VC3N84xOWRnazRxOHBhc3ZoZGMw",
        "service": {
          "id": "srv-ch5519dgk4q8pasvhdc0",
          "autoDeploy": "yes",
          "branch": "main",
          "buildFilter": null,
          "createdAt": "2023-04-27T10:38:29.895513Z",
          "name": "ToDoClient",
          "notifyOnFail": "default",
          "ownerId": "usr-ch54u5ks3fvqdilh4gfg",
          "repo": "https://github.com/t058329/ToDoListClient",
          "rootDir": "",
          "slug": "todoclient-981i",
          "suspended": "not_suspended",
          "suspenders": [],
          "type": "static_site",
          "updatedAt": "2023-05-13T22:06:35.275676Z",
          "serviceDetails": {
            "buildCommand": "npm run build",
            "parentServer": null,
            "publishPath": "build",
            "pullRequestPreviewsEnabled": "no",
            "url": "https://todoclient-981i.onrender.com"
          }
        }
      }
    ])
})
module.exports =app;