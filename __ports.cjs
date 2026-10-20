// Fixed service ports for this app: the web app, the mobile client and the desktop shell.
// Every consumer reads this file, so the three ports can never drift apart.
module.exports = require("./ports.json");
