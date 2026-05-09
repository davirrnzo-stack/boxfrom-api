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

app.listen(process.env.PORT || 3000, () => {
    console.log("API ONLINE");
});
