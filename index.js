const express =require("express")
const app= express();

let port=8080;
// app.listen(port,()=>{
//     console.log(`app is listening on port ${port}`);
// })

// app.use((req,res)=>{
//     console.log("new incoming request");
// })
// // console.dir(app)


app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
    console.log("sarita maurya");
})
app.get("/",(req,res)=>{
  res.send("hello, i am root")
})
app.get("/:username/:id",(req,res)=>{
    let {username, id} =req.params;
    res.send(`Welcome to  the page of ${username} and id of ${id}`);
})


app.get("/search",(req,res)=>{
  let { q } =( req.query);
  if(!q){
    res.send(`<h1>Nothing search</h1>`)
  }
  res.send(`<h1>search results for query: ${q}</h1>`)
})