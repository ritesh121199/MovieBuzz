var app=require("express")();
var bodyp=require("body-parser");
var request=require("request");
 
 app.use(bodyp.urlencoded({extended:true}));
 app.set("view engine","ejs");

 app.get("/",function(req,res)
 {
 	res.render("apy");
 });

 app.get("/movies",function(req,res)
 {
 	var p=req.body.movie;
 	var k="http://www.omdbapi.com/?s="+p+"&apikey=2b82d84e";
 	request( k ,function(error,response,body)
 	{
 		if(!error && response.statusCode==200)
 		{
              var data=JSON.parse(body);
              res.render("appyy",{data:data});
 		}
 	});
 });
app.listen(3002,function()
{
	console.log("started");
});