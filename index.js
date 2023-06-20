const express = require("express");
const app = express();
const PORT = 4000;
app.get('/', (req, res) => {
    res.send("Good day !!!!!!");
})
app.listen( PORT, () => console.log("Server is listening to port" + PORT ));
