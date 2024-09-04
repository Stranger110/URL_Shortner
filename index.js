const express = require('express');
const {connectToMongoDB} = require('./connect');
const urlRoute = require('./routes/url');
const URL = require('./models/url');

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

connectToMongoDB('mongodb://localhost:27017/short-url').then(
    () => console.log('Mongodb Connected!'))

app.use("/url", urlRoute);


app.get("/:shortId", async(req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
    {
        shortId,
    }, 
    { 
        $push: {
        visitHistory: {
            timestamp: Date.now(),
        },
    }, 
}
);
    res.redirect(entry.redirectURL);
});



app.listen(port, ()=> console.log("Port is running on "+port));