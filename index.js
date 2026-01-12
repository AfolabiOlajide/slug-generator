const { v4: uuidv4 } = require("uuid");

function generateSlug(text) {
    const formattedText = text.toLowerCase().split(" ").join("-");
    const formattedId = uuidv4().split("-").join("");
    return `${formattedText}-${formattedId}`;
}

module.exports = generateSlug;
