const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const savedKeys = [];

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

app.get("/generate", (req, res) => {

    const key = generateKey();

    const expires =
        Date.now() + 43200000;

    savedKeys.push({
        key: key,
        expires: expires
    });

    res.json({
        key: key,
        expiresIn: "12 hours"
    });

});

app.get("/check", (req, res) => {

    const key = req.query.key;

    if (!key) {

        return res.json({
            valid: false
        });

    }

    const foundKey =
        savedKeys.find(
            k => k.key === key
        );

    if (!foundKey) {

        return res.json({
            valid: false,
            message: "Key not found"
        });

    }

    if (Date.now() > foundKey.expires) {

        return res.json({
            valid: false,
            message: "Key expired"
        });

    }

    res.json({
        valid: true,
        message: "Key valid"
    });

});

const PORT =
    process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log("API ONLINE");

});
