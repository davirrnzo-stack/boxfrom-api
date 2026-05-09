const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send("BOXFROM API ONLINE");
});

app.get("/check", (req, res) => {

    const key = req.query.key;

    if (key === "BoxUniversal") {

        return res.json({
            valid: true
        });

    }

    res.json({
        valid: false
    });

});

app.get("/generate", (req, res) => {

    const key = "Free_TESTEBoxScripts_Key";

    res.json({
        key: key
    });

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("API ONLINE");
});
