const express = require('express');
const app = express();


const mockUserData=[
    {name:'Mark'},
    {name:'Jill'},
    {name:'Amy'},
    {name:'John'}

    ]
    app.get('/users', function(req,res){
         res.json({
              success: true,
              message: 'successfully got users. Nice!',
              users: mockUserData
         })
    })


app.listen(8000, function() {
    app.get('/users/:id',function(req,res){
        console.log(req.params.id)
        res.json({
            success: true,
            message: 'got one user',
            user: req.params.id
        })
    })
    console.log("Server Is Runnin From YOU!");
  })