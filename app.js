// jshint esversion:6

const express =require("express");
const request =require("request");
const bodyparser=require("body-parser");
const app=express();
let data = {};

app.use(bodyparser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static("public"));


app.get("/",function(req,res){
  request("https://fakestoreapi.com/products",function(err,res,body){
       data= JSON.parse(body);

  });
res.render("index",{data:data});

});


app.post("/cart", function(req,res){
  res.send("<form class='/cart'action='/' method='get'><button>Back</button></form>");
  });
  app.get("/cart",function(req,res){
    res.redirect("/");
  });


app.listen(3000,function(){
  console.log("running");
});
