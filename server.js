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

    const key =
        "Free_TESTEBoxScripts_Key";

    res.json({
        key: key
    });

});

app.listen(process.env.PORT || 3000, () => {
    console.log("API ONLINE");
});
