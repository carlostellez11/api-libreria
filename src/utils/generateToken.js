const jwt = require("jsonwebtoken");

const token = jwt.sign(
    {
        app: "Library API"
    },
    "LibraryAPI2026"
);

console.log(token);