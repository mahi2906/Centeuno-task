const express = require("express")
const app = express();
const routes = require("./src/modules/route");

app.use(routes);
app.listen(3000,()=>{
    console.log("Server is running on PORT 3000")
})