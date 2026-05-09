const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

function randomChar(chars) {

    return chars[
        Math.floor(Math.random() * chars.length)
    ];

}

function generateKey() {

    const upper =
        "ABCDEFGHJKLMNPQRSTUVWXYZ";

    const lower =
        "abcdefghijkmnopqrstuvwxyz";

    const numbers =
        "2345678";

    let middle = "";

    for (let i = 0; i < 14; i++) {

        const type =
            Math.floor(Math.random() * 3);

        if (type === 0) {

            middle += randomChar(upper);

        }

        else if (type === 1) {

            middle += randomChar(lower);

        }

        else {

            middle += randomChar(numbers);

        }

    }

    return `Free_${middle}BoxScripts_Key`;

}

app.get("/", (req, res) => {

    res.send("BOXFROM API ONLINE");

});

app.get("/check", (req, res) => {

    const key = req.query.key;

    if (!key) {

        return res.json({
            valid: false
        });

    }

    if (
        key.startsWith("Free_") &&
        key.endsWith("BoxScripts_Key")
    ) {

        return res.json({
            valid: true
        });

    }

    res.json({
        valid: false
    });

});

app.get("/generate", (req, res) => {

    const key = generateKey();

    res.json({
        key: key
    });

});

const PORT =
    process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log("API ONLINE");

});
