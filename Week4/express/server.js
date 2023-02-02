const express = require("express");
const app = express();
const port = 8000;

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// req is short for request
// res is short for response
app.get("/api/hello", (req, res) => {
res.json({ message: "Hello World" });
});

app.post("/api/NewHello", (req,res) => {
    console.log(req.body);
    res.json({status:'OK'})
})

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );