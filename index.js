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
})